import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import projectContext from '../../contexts/projects/projectContext';
import taskContext from '../../contexts/tasks/taskContext';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    fontSize: '1rem'
  }
}));

const Project = ({project}) => {
  const classes = useStyles();

  // Obtener el state de proyectos
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext

  // Obtener la funcion del context de tareas
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;


  const selectProject = id => {
    currentProject(id); // Fijar un proyecto actual
    getTasks(id); // Filtrar tareas cuando se de click

  }

  return(
    <li>
      <Button 
        type="button"
        className={classes.button}
        onClick={ () => selectProject(project._id) }
      >{project.name}</Button>
    </li>
  );
}

export default Project;