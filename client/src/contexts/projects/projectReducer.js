import { 
  PROJECT_FORM, 
  GET_PROJECTS,
  CREATE_PROJECT,
  SHOW_ERROR,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from '../../types';

export default (state, action) => {
  switch(action.type){
    case PROJECT_FORM:
      return {
        ...state,
        form: true
      }
    case GET_PROJECTS:
      return {
        ...state, 
        projects: action.payload
      }
    case CREATE_PROJECT:
      return {
        ...state, 
        projects: [...state.projects, action.payload],
        form: false,
        error: false
      }
    case SHOW_ERROR:
      return {
        ...state, 
       error: true
      }
    case CURRENT_PROJECT:
      return {
        ...state, 
        project: state.projects.filter(project => project._id === action.payload)
      }
    case DELETE_PROJECT:
      return {
        ...state, 
        projects: state.projects.filter(project => project._id !== action.payload),
        project: null
      }
    case ERROR_PROJECT:
      return{
        ...state,
        msg: action.payload
      }
      return state;
  }
}