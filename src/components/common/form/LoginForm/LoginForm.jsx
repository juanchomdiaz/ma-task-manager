import { Button,Form } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="username" className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Correo electrónico"
          autoComplete="username"
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="currentPassword" className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          aria-describedby="passwordHelpBlock"
          autoComplete="currentPassword"
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
