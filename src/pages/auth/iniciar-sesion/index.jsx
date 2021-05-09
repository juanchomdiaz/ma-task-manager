import { getSession } from 'next-auth/client';

import LoginForm from '@components/common/form/LoginForm';

import { Card, Col, Container, Row } from 'react-bootstrap';

export default function IniciarSesion() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-self-center align-items-center vh-100">
          <Card className="shadow-lg mb-5 bg-body rounded">
            <Card.Header as="h5" className="text-center">
              Iniciar Sesión
            </Card.Header>
            <Card.Body>
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
  }

  return {
    props: {},
  };
}
