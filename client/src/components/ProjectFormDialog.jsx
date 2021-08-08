import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  Switch,
  CircularProgress
} from '@material-ui/core';
import { useInput, useProjects } from '../hooks';

const ProjectFormDialog = ({ open, close }) => {
  const {creating, handleCreate} = useProjects();
  const [name, handleInputChange, reset] = useInput('');
  const [favorite, setFavorite] = useState(false);

  const handleChange = (e) => {
    setFavorite(e.target.checked)
  }

  const handleCreateProject = async () => {
    await handleCreate(name, favorite)
    close();
  }

  return (
    <Dialog open={open} close={close}>
      <DialogTitle>Añadir proyecto</DialogTitle>
      <DialogContent>
        <div>
          <label htmlFor="name">Nombre</label>
          <TextField value={name} onInput={handleInputChange} variant="outlined" margin="dense" id="name" type="text" size="small" fullWidth />
        </div>
        <div>
          <Switch checked={favorite} onChange={handleChange} />
          <span>Añadir a favoritos</span>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="transparent" onClick={close}>
          Cancel
        </Button>
        <Button color="primary"  onClick={handleCreateProject}>
          {creating  ? <CircularProgress /> : 'Añadir proyecto'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ProjectFormDialog.propTypes = {};

export default ProjectFormDialog;
