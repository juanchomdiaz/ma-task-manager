import { useSession } from 'next-auth/client';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './HomeMain.module.scss'; 

const HomeMain = () => {
    const [session] = useSession();

    const userName = session && session.user.name.split(" ")[0];
    return ( 
        <Container className="h-100">
            <Row className="justify-content-center align-items-center h-100">
                <Col className="d-flex flex-column mx-auto align-items-center">
                    <div className={`${styles.welcomeWrapper} d-flex`}>
                        <p className={styles.welcome}>Bienvenido <span>{userName}</span></p>
                    </div>
                    <div className={`${styles.homeIllustration} d-flex`}>
                        <img src="images/illustration.png" alt="mi-aguila-home" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default HomeMain;