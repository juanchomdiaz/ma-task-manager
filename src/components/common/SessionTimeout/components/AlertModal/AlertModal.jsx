import { Button, Modal } from "react-bootstrap";

const AlertModal = ({ show, countDown, handler }) => {
  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>¿Sigues con nosotros?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Su sesión finalizará automáticamente en {countDown} segs. Por favor, confírmanos que estas ahí para continuar navegando.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handler}>
          ¡Estoy aquí!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
