import styles from "./AppLayout.module.scss";

import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row className="flex-nowrap">
        <div className={`${styles.sidebarWrapper} px-0`}>
          <Sidebar />
        </div>

        <Col className="col py-3">{children}</Col>
      </Row>
    </Container>
  );
};

export default AppLayout;
