import TaskForm from "../TaskForm";
import TasksList from "../TasksList";
import TasksPagination from "../TasksPagination";

import { Col, Container, Row } from "react-bootstrap";

const TasksMain = () => {
    return ( 
        <Container className="mt-3">
            <Row>
                <Col>
                    <TaskForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TasksList />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TasksPagination />
                </Col>
            </Row>
        </Container>
    );
}
 
export default TasksMain;