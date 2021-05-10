import { useContext, useState, useEffect } from 'react';

import TasksContext from '@context/tasks/TasksContext';
import { Button, Table } from 'react-bootstrap';
import ConfirmModal from '@components/common/ConfirmModal/ConfirmModal';

const TasksList = () => {
  const { tasks, editTask, deleteTask, switchStateTask, setSelectedTask } = useContext(
    TasksContext
  );

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [modal, setModal] = useState(<></>);

  const showModal = (handler) => {
    setModal(
      <ConfirmModal
        show={true}
        onConfirmHandler={handler}
        onCloseHandler={() => setShowConfirmation(false)}
      />
    );
  };

  const handleEditClick = (e) => {
    editTask();
  };

  const handleDeleteClick = (taskId) => {
      console.log("click")
    showModal(() => deleteTask(taskId));
    setShowConfirmation(true);
  };

  const handleStateClick = (taskId) => {
    switchStateTask(taskId);
  };

  return (
    <>
      {showConfirmation && modal}

      {tasks.length === 0 ? (
        <div className="text-center mt-5 ms-2">No hay tareas para mostrar.</div>
      ) : (
        <Table responsive className="table-borderless">
          <thead>
            <tr className="d-flex">
              <th className="col-9">Nombre de la tarea</th>
              <th className="col-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="d-flex">
                <td className="col-9">{task.name}</td>
                <td className="col-3">
                  <span
                    className={`${
                      task.state ? 'bg-success' : 'bg-danger'
                    } badge rounded-pill me-2 mb-md-0 mb-2 pe-auto`}
                    onClick={() => handleStateClick(task.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {task.state ? 'finalizado' : 'pendiente'}
                  </span>
                  <Button variant="primary" size="sm" className="shadow-none me-2 mb-md-0 mb-2">
                    Editar
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="shadow-none"
                    onClick={() => handleDeleteClick(task.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TasksList;
