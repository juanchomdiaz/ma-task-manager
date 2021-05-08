import styles from "./AppLayout.module.scss";

import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row className="flex-nowrap">
        <div className={`${styles.sidebarWrapper} px-0`}>
          <Sidebar />
        </div>

        <div className="col py-3">
            {children}
        </div>
      </Row>
    </Container>
  );
};

export default AppLayout;
