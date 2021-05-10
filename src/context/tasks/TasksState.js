import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import TasksContext from './TasksContext';
import TasksReducer from './TasksReducer';

import { TASKS_CHANGED } from './TasksTypes';

import PropTypes from 'prop-types';

const TasksState = ({ children }) => {
  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  const addTask = (task) => {
    let newTaskId = uuidv4();
    let taskObj = {
      id: newTaskId,
      name: task,
      state: false,
    };

    let tasks = [...state.tasks, taskObj];

    dispatch({
      type: TASKS_CHANGED,
      payload: {
        tasks,
      },
    });
  };

  const deleteTask = (taskId) => {
    if (!taskId) return;

    let tasks = state.tasks.filter((tsk) => tsk.id !== taskId);

    dispatch({
      type: TASKS_CHANGED,
      payload: {
        tasks,
      },
    });
  };

  const switchStateTask = (taskId) => {
    if (!taskId) return;

    let task = state.tasks.find((t) => t.id === taskId);
    task.state = !task.state;

    let tasks = state.tasks.map((tsk) => (tsk.id === task.id ? task : tsk));

    dispatch({
      type: TASKS_CHANGED,
      payload: {
        tasks,
      },
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        tasksCount: state.tasks.length,
        addTask,
        deleteTask,
        switchStateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

TasksState.propTypes = {
  children: PropTypes.node,
};

export default TasksState;
