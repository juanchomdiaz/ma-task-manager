import { useContext, useState } from 'react';

import TasksContext from '@context/tasks/TasksContext';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const TaskForm = () => {
  const { addTask } = useContext(TasksContext);

  const [task, setTask] = useState('');

  const handleClick = (e) => {
    addTask(task);
    setTask('');
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

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
          variant="outline-primary"
          className="shadow-none"
          onClick={handleClick}
          disabled={task.length === 0}
        >
          Agregar
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default TaskForm;
