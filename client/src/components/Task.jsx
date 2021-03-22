import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ProjectContext } from '../contexts/project';
import { TaskContext } from '../contexts/task';

const useStyles = makeStyles((theme) => ({
  incomplete: {
    color: '#e05252',
  },
  complete: {
    color: '#0f880f',
  },
}));

export default function Task({ task }) {
  const classes = useStyles();

  const { project } = useContext(ProjectContext);
  const { deleteTask, getTasks, updateTask, saveCurrentTask } = useContext(
    TaskContext
  );

  const [currentProject] = project;

  // Funcion cuando se presiona el boton
  const handleClickDelete = (id) => {
    deleteTask(id, currentProject._id);
    getTasks(currentProject._id);
  };

  // Modiica el estado de las tareas
  const handleChangeStatus = (task) => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    updateTask(task);
  };

  const handleSelectTask = (task) => {
    saveCurrentTask(task);
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div>
        {task.status ? (
          <Button
            onClick={() => handleChangeStatus(task)}
            type="Button"
            className={classes.complete}
          >
            Completo
          </Button>
        ) : (
          <Button
            onClick={() => handleChangeStatus(task)}
            type="Button"
            className={classes.incomplete}
          >
            Incompleto
          </Button>
        )}
      </div>

      <div className="actions">
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={() => handleSelectTask(task)}
        >
          Editar
        </Button>

        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={() => handleClickDelete(task._id)}
        >
          Eliminar
        </Button>
      </div>
    </li>
  );
}
