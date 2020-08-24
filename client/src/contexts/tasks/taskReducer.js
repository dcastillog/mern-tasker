import { 
  TASKS_PROJECT,
  CREATE_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_TASK
} from '../../types';


export default(state, action) => {
  switch(action.type){
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: action.payload
      }
    case CREATE_TASK:
      return{
        ...state,
        tasksproject: [action.payload, ...state.tasksproject],
        error: false
      }
    case VALIDATE_TASK:
      return{
        ...state,
        error: true
      }
    case DELETE_TASK:
      return{
        ...state,
        tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
      }
    case UPDATE_TASK:
      return{
        ...state,
        tasks: state.tasksproject.map(task => task._id === action.payload._id ? action.payload : task)
      }
    case CURRENT_TASK:
      return {
        ...state, 
        selectedtask: action.payload
      }
      case CLEAR_TASK:
        return {
          ...state, 
          selectedtask: null
        }
    default:
      return state;
      
  }
}