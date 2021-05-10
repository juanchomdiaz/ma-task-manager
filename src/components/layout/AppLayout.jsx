import { useSession } from 'next-auth/client';

import styles from './AppLayout.module.scss';

import { Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';

const AppLayout = ({ children }) => {
  const [session] = useSession();

  return (
    <Container fluid>
      <Row className="flex-nowrap">
        {session && (
          <div className={`${styles.sidebarWrapper} px-0`}>
            <Sidebar />
          </div>
        )}

        <div className="col py-3 vh-100">{children}</div>
      </Row>
    </Container>
  );
};

export default AppLayout;
