import React, { Fragment, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Task from './Task';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { ProjectContext } from '../contexts/project';
import { TaskContext } from '../contexts/task';

export default function TaskList() {
  const { project, deleteProject } = useContext(ProjectContext);
  const { tasksproject } = useContext(TaskContext);

  // Si no hay proyecto seleccionado
  if (!project) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer proyecto actual
  const [currentProject] = project;

  const tasks = tasksproject;

  const handleClickDelete = () => {
    deleteProject(currentProject._id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {currentProject.name}</h2>
      <ul className="list-tasks">
        {tasks?.length === 0 ? (
          <li className="task">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasks?.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="task">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <Container maxWidth="sm">
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={handleClickDelete}
          fullWidth
        >
          Eliminar Proyecto
        </Button>
      </Container>
    </Fragment>
  );
}
