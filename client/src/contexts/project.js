import React, { createContext, useReducer } from 'react';
import axios from '../config/axios';
import {
  GET_PROJECTS,
  CREATE_PROJECT,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../types';
import projectReducer from '../reducers/project';

export const ProjectContext = createContext();

export const ProjectContextProvider = (props) => {
  const initialState = {
    projects: [],
    project: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const getProjects = async () => {
    try {
      const result = await axios.get('/api/projects');

      dispatch({
        type: GET_PROJECTS,
        payload: result.data.projects,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createProject = async (project) => {
    try {
      const result = await axios.post('/api/projects', project);

      dispatch({
        type: CREATE_PROJECT,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`api/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        getProjects,
        createProject,
        currentProject,
        deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
