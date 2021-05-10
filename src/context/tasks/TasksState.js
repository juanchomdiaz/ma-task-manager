import React, { useReducer } from "react";

import TasksContext from "./TasksContext";
import TasksReducer from "./TasksReducer";

import {
    TASKS_CHANGED
} from "./TasksTypes";

import PropTypes from 'prop-types';

const TasksState = ({ children }) => {
  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  const addTask = (task) => {
    let tasks = [...state.tasks, task];

    dispatch({
        type: TASKS_CHANGED,
        payload: {
           tasks, 
        },
      });
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        tasksCount: state.tasks.length,
        addTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

TasksState.propTypes = {
    children: PropTypes.node
};


export default TasksState;