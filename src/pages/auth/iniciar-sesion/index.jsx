import { getSession } from 'next-auth/client';

import LoginForm from '@components/common/form/LoginForm';

import { Card, Col, Container, Row } from 'react-bootstrap';

export default function IniciarSesion() {
  return (
    <Container className="h-100">
      <Row className="row h-100 justify-content-center align-items-center">
        <Col className="d-flex col-md-6 col-sm-12 justify-content-center align-self-center align-items-center">
          <Card className="shadow mb-5 w-100">
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
