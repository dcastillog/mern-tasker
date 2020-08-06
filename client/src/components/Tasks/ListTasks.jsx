import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Task from './Task';

export default function ListTasks() {
  const tasks = [
    {name: 'Elegir plataforma', status: true},
    {name: 'Elegir comida', status: false},
    {name: 'Elegir canción', status: false},
    {name: 'Elegir hosting', status: true},
  ]

  return(
    <Fragment>
      <h2>Proyecto: ProYecto 1</h2>
      <ul className="list-tasks">
        {tasks.length === 0
          ? (<li className="task"><p>No hay tareas</p></li>)
          : tasks.map(task => (
              <Task 
                task={task}
              />
            ))
        }
        </ul>
        
        <Container maxWidth="sm">
          <Button type="button" variant="contained" color="secondary" fullWidth>Eliminar Proyecto</Button>
        </Container>
    </Fragment>
  )
}