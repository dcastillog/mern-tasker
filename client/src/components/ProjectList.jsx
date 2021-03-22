import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Alert from '@material-ui/lab/alert';

import Project from './Project';
import { UIContext } from '../contexts/ui';
import { ProjectContext } from '../contexts/project';

const ProjectList = () => {
  const { msg, projects, getProjects } = useContext(ProjectContext);
  const { alert, showAlert } = useContext(UIContext);

  useEffect(() => {
    // si hay un error
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
    getProjects();
    // eslint-disable-next-line
  }, [msg]);

  if (projects.length === 0) return <p>No hay proyectos</p>;

  return (
    <ul className="list-projects">
      {alert ? <Alert severity={alert.category}>{alert.msg}</Alert> : null}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} className="project">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
