import { useContext, useState, useEffect } from 'react';

import TasksContext from '@context/tasks/TasksContext';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const TaskForm = () => {
  const { addTask, isEditingTask, selectedTask, cancelEditing, updateTask } = useContext(TasksContext);

  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddClick = (e) => {
    if(isEditingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTask('');
  };

  useEffect(() => {
    if(isEditingTask) setTask(selectedTask.name);
  }, [isEditingTask])

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Ingresa el nombre de la tarea"
        aria-label="Tarea"
        aria-describedby="task-form"
        className="shadow-none"
        value={task}
        onChange={handleChange}
      />
      <InputGroup.Append>
        <Button
          variant="primary"
          className="shadow-none"
          onClick={handleAddClick}
          disabled={task.length === 0}
        >
          {isEditingTask ? 'Guardar' : 'Agregar'}
        </Button>
        {isEditingTask && <Button variant="danger" onClick={cancelEditing}>Cancelar</Button>}
      </InputGroup.Append>
    </InputGroup>
  );
};

export default TaskForm;
