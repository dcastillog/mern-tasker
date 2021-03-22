import React, { Fragment, useState, useContext } from 'react';
import { Button, Snackbar, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { ProjectContext } from '../../contexts/project';
import { useForm, useAlert } from '../../hooks';

import './ProjectForm.css';

const ProjectForm = () => {
  const { createProject } = useContext(ProjectContext);
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
  });
  const { name } = formValues;

  const [alert, showAlert] = useAlert();
  const [showForm, setshowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == '') {
      // showError();
      showAlert('Project name is required', 'error');
      return;
    }
    createProject(formValues);
    reset();
  };

  const handleClickNewProject = () => {
    setshowForm(true);
  };

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClickNewProject}
      >
        Nuevo proyecto
      </Button>

      {showForm ? (
        <form className="project-form" onSubmit={handleSubmit}>
          <TextField
            placeholder="Nombre proyecto"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '30px' }}
          >
            Agregar proyecto
          </Button>
        </form>
      ) : null}

      {alert ? <Alert severity={alert.category}>{alert.message}</Alert> : null}
    </Fragment>
  );
};

export default ProjectForm;
