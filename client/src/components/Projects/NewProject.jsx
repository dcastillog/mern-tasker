import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../contexts/projects/projectContext';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const NewProject = () => {
  
  // Obtener el state del formulario de nuevo proyecto
  const projectsContext = useContext(projectContext);
  const { form, error, showForm, createProject, showError } = projectsContext;
  
  // State para proyecto 
  const [project, saveProject] = useState({
    name: ''
  });

  const { name } = project;


  const handleOnChangeProject = e => {
    saveProject({
      ...project, 
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Validar proyecto
    if(name==''){
      showError();
      return;
    }
    // Agregar al state
    createProject(project);
    // Reiniciar el formulario
    saveProject({
      name: ''
    })
  }

  const handleClick = () => {
      showForm();
  }

  return(
    <Fragment>
      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        onClick={handleClick}
      >Nuevo proyecto</Button>
      
      {form ? (
        <form 
          className="new-project-form"
          onSubmit={handleSubmit}
          >
          <TextField 
            placeholder="Nombre proyecto"
            name="name"
            value={name}
            onChange={handleOnChangeProject}
            />
          <Button type="submit" variant="contained" color="primary" style={{marginTop: '30px'}}>Agregar proyecto</Button>
        </form>
      ) : (
        null
      )}

      {error ? <p className="message error">El nombre del proyecto es obligatorio</p> : null}
    </Fragment>
  );
}

export default NewProject