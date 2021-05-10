import { TASKS_CHANGED, SELECTED_TASK_CHANGED } from './TasksTypes';

const TasksReducer = (state, action) => {
  switch (action.type) {
    case TASKS_CHANGED:
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    case SELECTED_TASK_CHANGED:
      return {
        ...state,
        selectedTask: action.payload.selectedTask,
      };
    default:
      return state;
  }
};

export default TasksReducer;
