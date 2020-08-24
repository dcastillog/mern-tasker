import React, { useReducer } from 'react';

import {v4 as uuid} from 'uuid';

import axiosClient from '../../config/axios';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
  PROJECT_FORM, 
  GET_PROJECTS,
  CREATE_PROJECT,
  SHOW_ERROR,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
} from '../../types';


const ProjectState = props => {

  const initialState = {
    projects : [],
    project: null,
    form: false,
    error: false,
    msg: null
  }

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm  = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  // Obtener los proyectos
  const getProjects = async () => {
    try {
      const result = await axiosClient.get('/api/projects');

      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects
      })
    } catch (error) {
      console.log(error);
      const alert = {
        msg: 'Hubo un error',
        category: 'error'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  const createProject = async project => {

    try {
      const result = await axiosClient.post('/api/projects', project)
      // Insertar proyecto en el state
      dispatch({
        type: CREATE_PROJECT,
        payload: result.data
      })

    } catch (error) {
      console.log(error);
      const alert = {
        msg: 'Hubo un error',
        category: 'error'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  const showError = () => {
    dispatch({
      type: SHOW_ERROR
    })
  }

  const currentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  const deleteProject = async projectId => {
    try {
      await axiosClient.delete(`api/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      })
    } catch (error) {
      console.log(error);
      const alert = {
        msg: 'Hubo un error',
        category: 'error'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        error: state.error,
        project: state.project,
        msg: state.msg,
        showForm,
        getProjects,
        createProject,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;