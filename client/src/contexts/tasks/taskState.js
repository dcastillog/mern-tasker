import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {v4 as uuid} from 'uuid';
import axiosClient from '../../config/axios'

import { 
  TASKS_PROJECT,
  CREATE_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_TASK
} from '../../types';


const TaskState = props => {
  const initialState = {
    tasksproject: [],
    error: false,
    selectedtask: null

  }

  // Crear dispatch
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Crear las funciones


  // Obtener las tareas del proyecto
  const getTasks = async project => {
    try {
      const result = await axiosClient.get('/api/tasks',{params: { project }});
      dispatch({
        type: TASKS_PROJECT,
        payload: result.data.tasks
      })
    } catch (error){  
      console.log(error)
    }
  }

  // Crear una tarea al proyecto seleccionado
  const createTask = async task => {

    try {
      const result = await axiosClient.post('/api/tasks', task);
      dispatch({
        type: CREATE_TASK,
        payload: task
      })
    } catch (error){
      console.log(error)
    }
  }

  // Validar campo 
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  // Eliminar tarea por id 
  const deleteTask = async (id, project) => {
    try {
      await axiosClient.delete(`/api/tasks/${id}`, { params: { project }})
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    } catch(error){
      console.log(error)
    }
  }

  // eDITAR TARAP
  const updateTask = async task => {
    try{
      const result = await axiosClient.put(`/api/tasks/${task._id}`, task)
      dispatch({
        type: UPDATE_TASK,
        payload: result.data.task
      })
    } catch (error){
      console.log(error)
    }
  }

  // Extraer tarea para editar
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }
  

  // Elimina la tarea seleccionada

  const clearTask = () => {
    dispatch({
      type: CLEAR_TASK,
    })
  }

  return(
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
        clearTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState