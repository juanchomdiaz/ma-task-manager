import {signIn} from 'next-auth/client';

import { Button,Form } from 'react-bootstrap';

import useFormValidation from '@hooks/Forms/useFormValidation';
import validationSchema from './LoginForm.validation';

const LoginForm = () => {
    const initialValues = {
        username: '',
        password: ''
    }

    const handleLogin = () => {
        signIn('credentials', {username: 'test', password: '1234'});
    }

    const {handleSubmit, handleChange, values, errors} = useFormValidation(initialValues, validationSchema, handleLogin);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="username" className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="username"
          autoComplete="username"
          onChange={handleChange} 
          value={values.username || ''}
          className={`form-control ${
            errors.username ? "is-invalid" : ""
            }`} 
          required
        />
        <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="currentPassword" className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          aria-describedby="passwordHelpBlock"
          autoComplete="currentPassword"
          onChange={handleChange} 
          value={values.password || ''} 
          required
        />
        <Form.Text id="passwordHelpBlock" muted>
          Tu contraseña debe contener al menos 7 caractéres, un número y una letra mayúscula.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
