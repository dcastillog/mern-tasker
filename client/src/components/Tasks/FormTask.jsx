import React, { useContext, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import projectContext from '../../contexts/projects/projectContext';
import taskContext from '../../contexts/tasks/taskContext';

export default function FormTask(){

  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;
  
  const tasksContext = useContext(taskContext);
  const { selectedtask, error, createTask, validateTask, getTasks, updateTask, clearTask } = tasksContext;

  // Effect que detecta la tarea seleccionada
  useEffect(() => {
    if(selectedtask != null){
      saveTask(selectedtask)
    } else{
      saveTask({
        name: ''
      });
    }
  }, [selectedtask])


  // State del formulario
  const [task, saveTask] = useState({
    name: '',
  })

  // Extraer el nombre del proyecto
  const { name } = task;
  
  if(!project) return null;

  const [currentProject] = project;

  // Leer los valores del formulario
  const handleChange = e => {
    saveTask({
      ...task,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    // Validar
    if(name.trim() === ''){
      validateTask();
      return;
    }

    // Revisa si es edición o create
    if(selectedtask === null){
      // Agregar la nueva tarea al state
      task.project = currentProject._id;
      createTask(task);
    } else{
      // Actualizar tarea
      updateTask(task);
      clearTask();
    } 

    // Obtener y filtrar las tareas del proyecto actual
    getTasks(currentProject.id);

    // Reiniciar el form
    saveTask({
      name: ''
    });
  }

  return(

    <Container maxWidth="md">
      <form 
        className="new-project-form"
        onSubmit={handleSubmit}
        >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          >
          <TextField 
            placeholder="Nombre tarea"
            variant="outlined"
            style={{ width: '50ch', paddingRight: '30px' }}
            autofocus
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            />
           <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon/>}
            >
              {selectedtask ? 'Editar tarea': 'Agregar tarea'}
            </Button>
        </Grid>
      </form>
      {error ? <p className="message error">Ingrese el nombre de su tarea</p>: null}      
    </Container>
  );
}