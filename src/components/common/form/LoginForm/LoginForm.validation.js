const isValidEmail = (email) => {
  if (email === '') return false;
  //RFC 2822 STANDARD EMAIL VALIDATION PATTERN
  let regexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let result = regexp.test(email.toLowerCase());
  return result;
};

const hasAtLeastOneUppercaseChar = (value) => {
  if (value === '') return false;
  let regexp = /^(?=.*[A-Z]).*$/;
  let result = regexp.test(value);
  return result;
};

const hasAtLeastOneNumber = (value) => {
  if (value === '') return false;
  let regexp = /^(?=.*[0-9]).*$/;
  let result = regexp.test(value);
  return result;
};

const hasMinLenght = (value) => {
  if (value === '') return false;
  return value.length >= 7;
};

export default {
    username: [{ validate: isValidEmail, errorMsg: 'Ingrese un correo electrónico válido.' }],
    password: [
      {
        validate: hasAtLeastOneUppercaseChar,
        errorMsg: 'La contraseña debe tener al menos 1 letra mayúscula.',
      },
      { validate: hasAtLeastOneNumber, errorMsg: 'La contraseña debe tener al menos 1 número.' },
      { validate: hasMinLenght, errorMsg: 'La contraseña debe tener al menos 7 caracteres.' },
    ],
  };
