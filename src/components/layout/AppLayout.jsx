import { useSession } from 'next-auth/client';

import styles from './AppLayout.module.scss';

import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';

const AppLayout = ({ children }) => {
  const [session] = useSession();

  return (
    <Container fluid>
      <Row className="flex-nowrap">
        {session && (
          <div className={`${styles.sidebarWrapper} d-flex flex-column px-0`}>
            <Sidebar />
          </div>
        )}

        <Col className={`${styles.contentWrapper} d-flex flex-column`}>{children}</Col>
      </Row>
    </Container>
  );
};

export default AppLayout;
