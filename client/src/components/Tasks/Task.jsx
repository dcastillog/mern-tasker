import React from 'react';
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  incomplete: {
    color: '#e05252'
  },
  complete: {
    color: '#0f880f'
  }
}));

export default function Task({task}) {
  const classes = useStyles();
  
  return(
    <li className="task shadow">
      <p>{task.name}</p>

      <div>
        {task.status
        ? (
          <Button type="Button" className={classes.complete}>Completo</Button>
        )
        : (
          <Button type="Button" className={classes.incomplete}>Incompleto</Button>
        )
        }
      </div>

      <div className="actions">
        <Button
          type="button"
          variant="outlined"
          color="primary"
        >Editar</Button>

        <Button
          type="button"
          variant="outlined"
          color="secondary"
        >Eliminar</Button>
      </div>
    </li>
  )
}