import {
  GET_PROJECTS,
  CREATE_PROJECT,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        error: false,
      };
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project._id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        project: null,
      };
    default:
      return state;
  }
};
