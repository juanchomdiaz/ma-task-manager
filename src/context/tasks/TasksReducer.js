import {
    TASKS_CHANGED
  } from './TasksTypes';
  
  const TasksReducer = (state, action) => {
    switch (action.type) {
      case TASKS_CHANGED:
        return {
          ...state,
          tasks: action.payload.tasks,
        };
      default:
        return state;
    }
  };
  
  export default TasksReducer;