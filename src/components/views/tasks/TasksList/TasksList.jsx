import { useContext } from 'react';

import TasksContext from '@context/tasks/TasksContext';
import { Button, Table } from 'react-bootstrap';

const TasksList = () => {
  const { tasks, editTask, deleteTask, switchStateTask } = useContext(TasksContext);

  const handleEditClick = (e) => {
    editTask();
  };

  const handleDeleteClick = (taskId) => {
    deleteTask(taskId);
  };

  const handleStateClick = (taskId) => {
    switchStateTask(taskId);
  };

  return (
    <>
      {tasks.length === 0 ? (
        <div className="text-center mt-5 ms-2">No hay tareas para mostrar.</div>
      ) : (
        <Table responsive table-borderless>
          <thead>
            <tr class="d-flex">
              <th class="col-9">Nombre de la tarea</th>
              <th class="col-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} class="d-flex">
                <td class="col-9">{task.name}</td>
                <td class="col-3">
                  <span
                    className={`${
                      task.state ? 'bg-success' : 'bg-danger'
                    } badge rounded-pill me-2 mb-md-0 mb-2 pe-auto`}
                    onClick={() => handleStateClick(task.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {task.state ? 'finalizado' : 'pendiente'}
                  </span>
                  <Button variant="primary" size="sm" className="me-2 mb-md-0 mb-2">
                    Editar
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => handleDeleteClick(task.id)}>
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
