import { TASKS_CHANGED, EDITING_TASK_START, EDITING_TASK_CANCELLED, EDITING_TASK_FINISHED } from './TasksTypes';

const TasksReducer = (state, action) => {
  switch (action.type) {
    case TASKS_CHANGED:
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    case EDITING_TASK_START:
      return {
        ...state,
        selectedTask: action.payload.selectedTask,
        isEditingTask: action.payload.isEditingTask,
      };
    case EDITING_TASK_CANCELLED:
    case EDITING_TASK_FINISHED:
      return {
        ...state,
        selectedTask: action.payload.selectedTask,
        isEditingTask: action.payload.isEditingTask,
      };
    default:
      return state;
  }
};

export default TasksReducer;
