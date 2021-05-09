/* 
   Form handling abstraction and validations.
   Validates form values using a validation schema.
   Schema object shape:
   {
       fieldName: [{validate: validatorFunction, errorMsg: "fieldName error message"}],
       fieldName2: [{validate: validatorFunction2, errorMsg: "fieldName2 error message"}],
   }
*/
import { useState, useEffect } from 'react';

const useFormValidation = (initialValues, validationSchema, submitCallback) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateSchema = () => {
    let validationErrors = {};

    Object.keys(values).forEach((fieldName) => {
      if (Array.isArray(validationSchema[fieldName])) {
        validationSchema[fieldName].forEach((validationRule) => {
          let { validate, errorMsg } = validationRule;

          if (!validate(values[fieldName])) {
            let fieldErrors = {};
            if (Array.isArray(validationErrors[fieldName])) {
              fieldErrors = [...validationErrors[fieldName], errorMsg];
            } else {
              fieldErrors = [errorMsg];
            }
            validationErrors = { ...validationErrors, [fieldName]: fieldErrors };
          }
        });
      }
    });

    return validationErrors;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) submitCallback();
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setErrors(validateSchema());
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useFormValidation;
