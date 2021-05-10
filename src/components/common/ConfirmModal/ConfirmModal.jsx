import { Button, Modal } from 'react-bootstrap';

const ConfirmModal = ({ show, onConfirmHandler, onCloseHandler }) => {
  const handleClose = () => onCloseHandler();
  const handleConfirm = () => {onConfirmHandler(); handleClose();}

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>¿Estas seguro?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ten en cuenta que esta acción no se podrá deshacer.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleConfirm}>
          Sí
        </Button>
        <Button variant="danger" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
