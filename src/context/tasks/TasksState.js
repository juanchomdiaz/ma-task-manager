import React, { useReducer, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import TasksContext from './TasksContext';
import TasksReducer from './TasksReducer';

import {
  TASKS_CHANGED,
  EDITING_TASK_START,
  EDITING_TASK_CANCELLED,
  EDITING_TASK_FINISHED,
} from './TasksTypes';

import PropTypes from 'prop-types';

const TasksState = ({ children }) => {
  const initialState = {
    tasks: [],
    selectedTask: {},
    isEditingTask: false,
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("mg.tasks")); 

    if (Array.isArray(tasks)) {
      dispatch({
          type: TASKS_CHANGED,
          payload: {
            tasks,
          },
      });
    }
  }, []);

  const updateTasksState = (tasks) => {
    dispatch({
      type: TASKS_CHANGED,
      payload: {
        tasks,
      },
    });

    localStorage.setItem("mg.tasks", JSON.stringify(tasks));
  }

  const addTask = (task) => {
    let newTaskId = uuidv4();
    let taskObj = {
      id: newTaskId,
      name: task,
      state: false,
    };

    let tasks = [...state.tasks, taskObj];

    updateTasksState(tasks);
  };

  const deleteTask = (taskId) => {
    let tasks = state.tasks.filter((tsk) => tsk.id !== taskId);
    updateTasksState(tasks);
  };

  const switchStateTask = (taskId) => {
    let task = state.tasks.find((t) => t.id === taskId);
    task.state = !task.state;

    let tasks = state.tasks.map((tsk) => (tsk.id === task.id ? task : tsk));
    updateTasksState(tasks);
  };

  const editTask = (taskId) => {
    let task = state.tasks.find((tsk) => tsk.id === taskId);

    dispatch({
      type: EDITING_TASK_START,
      payload: {
        selectedTask: task,
        isEditingTask: true,
      },
    });
  };

  const cancelEditing = () => {
    dispatch({
      type: EDITING_TASK_CANCELLED,
      payload: {
        selectedTask: {},
        isEditingTask: false,
      },
    });
  };

  const updateTask = (taskName) => {
    let task = state.tasks.find((t) => t.id === state.selectedTask.id);
    task.name = taskName;

    let tasks = state.tasks.map((tsk) => (tsk.id === task.id ? task : tsk));

    updateTasksState(tasks);

    dispatch({
      type: EDITING_TASK_FINISHED,
      payload: {
        selectedTask: {},
        isEditingTask: false,
      },
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        tasksCount: state.tasks.length,
        isEditingTask: state.isEditingTask,
        selectedTask: state.selectedTask,
        addTask,
        editTask,
        deleteTask,
        switchStateTask,
        cancelEditing,
        updateTask,
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
