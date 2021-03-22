import React, { useContext } from 'react';

import { Button, makeStyles } from '@material-ui/core';

import { ProjectContext } from '../contexts/project';
import { TaskContext } from '../contexts/task';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    fontSize: '1rem',
  },
}));

const Project = ({ project }) => {
  const classes = useStyles();

  const { currentProject } = useContext(ProjectContext);
  const { getTasks } = useContext(TaskContext);

  const selectProject = (id) => {
    currentProject(id); // Fijar un proyecto actual
    getTasks(id); // Filtrar tareas cuando se de click
  };

  return (
    <li>
      <Button
        type="button"
        className={classes.button}
        onClick={() => selectProject(project._id)}
      >
        {project.name}
      </Button>
    </li>
  );
};

export default Project;
