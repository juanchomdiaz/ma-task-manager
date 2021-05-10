import React, { useReducer } from "react";

import TasksContext from "./TasksContext";
import TasksReducer from "./TasksReducer";

import {

} from "./TasksTypes";

import PropTypes from 'prop-types';

const TasksState = ({ children }) => {
  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        tasksCount: state.tasks.length
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