import { signIn } from 'next-auth/client';

import { Button, Form } from 'react-bootstrap';

import useFormValidation from '@hooks/Forms/useFormValidation';
import validationSchema from './LoginForm.validation';

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleLogin = () => {
    signIn('credentials', { username: 'test', password: '1234' });
  };

  const { handleSubmit, handleOnBlur, handleChange, values, errors } = useFormValidation(
    initialValues,
    validationSchema,
    handleLogin
  );

  return (
    <Form noValidate onSubmit={handleSubmit} className="min-vw-75">
      <Form.Group controlId="username" className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          onBlur={handleOnBlur}
          value={values.username || ''}
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username && errors.username.map((error, idx) => <p key={idx}>{error}</p>)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="currentPassword" className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          aria-describedby="passwordHelpBlock"
          autoComplete="currentPassword"
          onChange={handleChange}
          onBlur={handleOnBlur}
          value={values.password || ''}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password && errors.password.map((error, idx) => <p key={idx}>{error}</p>)}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
};

export default LoginForm;
