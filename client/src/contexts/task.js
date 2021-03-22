import React, { createContext, useContext, useReducer } from 'react';
import axios from '../config/axios';
import {
  TASKS_PROJECT,
  CREATE_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_TASK,
} from '../types';

import taskReducer from '../reducers/task';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const initialState = {
    tasksproject: [],
    error: false,
    selectedtask: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasks = async (project) => {
    try {
      const result = await axios.get('/api/tasks', {
        params: { project },
      });
      console.log(result);
      dispatch({
        type: TASKS_PROJECT,
        payload: result.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Crear una tarea al proyecto seleccionado
  const createTask = async (task) => {
    try {
      const result = await axios.post('/api/tasks', task);
      dispatch({
        type: CREATE_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = async (id, project) => {
    try {
      await axios.delete(`/api/tasks/${id}`, { params: { project } });
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (task) => {
    try {
      const result = await axios.put(`/api/tasks/${task._id}`, task);
      dispatch({
        type: UPDATE_TASK,
        payload: result.data.task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const clearTask = () => {
    dispatch({
      type: CLEAR_TASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasksproject: state.tasksproject,
        error: state.error,
        selectedtask: state.selectedtask,
        getTasks,
        createTask,
        validateTask,
        deleteTask,
        saveCurrentTask,
        updateTask,
        clearTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
