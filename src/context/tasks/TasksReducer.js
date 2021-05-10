import {

  } from './TasksTypes';
  
  const TasksReducer = (state, action) => {
    switch (action.type) {
      case LOAD_USERS_START:
        return {
          ...state,
          isReady: false,
        };
      default:
        return state;
    }
  };
  
  export default TasksReducer;