import React, { Fragment, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Task from './Task';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import projectContext from '../../contexts/projects/projectContext';
import taskContext from '../../contexts/tasks/taskContext';

export default function ListTasks() {

  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Obtener las tareas del proyecto desde el context
  const tasksContext = useContext(taskContext);
  const { tasksproject } = tasksContext;


  // Si no hay proyecto seleccionado
  if(!project) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer proyecto actual 
  const [currentProject] = project; 

  const tasks = tasksproject;

  const handleClickDelete = () => {
    deleteProject(currentProject._id);
  }

  return(
    <Fragment>
      <h2>Proyecto: {currentProject.name}</h2>
      <ul className="list-tasks">
        {tasks.length === 0
          ? (<li className="task"><p>No hay tareas</p></li>)
          : <TransitionGroup>
              {tasks.map(task => (
                <CSSTransition
                  key={task.id}
                  timeout={200}
                  classNames="task"
                >
                  <Task 
                    
                    task={task}
                  />
                </CSSTransition>
              ))}
          </TransitionGroup>
        }
        </ul>
        
        <Container maxWidth="sm">
          <Button type="button" variant="contained" color="secondary" onClick={handleClickDelete} fullWidth>Eliminar Proyecto</Button>
        </Container>
    </Fragment>
  )
}