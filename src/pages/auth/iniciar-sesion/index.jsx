import { getCsrfToken } from 'next-auth/client';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export default function IniciarSesion({ csrfToken }) {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-self-center align-items-center vh-100">
          <Card className="shadow-lg mb-5 bg-body rounded">
          <Card.Header as="h5" className="text-center">Iniciar Sesión</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Correo electrónico" />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    aria-describedby="passwordHelpBlock"
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Tu contraseña debe contener al menos 7 caractéres, un número y una letra mayúscula.
                  </Form.Text>
                </Form.Group>

                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                <Button variant="primary" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
