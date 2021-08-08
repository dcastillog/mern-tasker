import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { AiOutlineClose } from 'react-icons/all';
import { useInput, useTasks } from '../hooks';
import {useProjectsValue, useSelectedFilterValue} from '../contexts';

export const CreateTaskQuicklyDialog = ({open, close, onCreate}) => {
  const [name, handleInputChange, reset] = useInput('');
  const {projects} = useProjectsValue();
  const { selectedFilter } = useSelectedFilterValue();
  const { handleCreateByProject } = useTasks(selectedFilter);

  console.log(projects)

  return <Dialog open={open} close={close} fullWidth>
    <DialogTitle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Añadir tarea rápidamente
        <IconButton onClick={close}>
          <AiOutlineClose />
        </IconButton>
      </div>
    </DialogTitle>
    <DialogContent>
      <TextField variant="outlined" size="small" fullWidth value={name} onInput={handleInputChange} placeholder="Ej. Renovar gimnasio cada 1 de mayo" />
      <Select>
        <MenuItem value={1} selected={true}>
          <em>Bandeja de entrada</em>
        </MenuItem>

        {projects.map(p => {
          return (
              <MenuItem value={p.id} >
                <em>{p.name}</em>
              </MenuItem>
          )
        })}
      </Select>
    </DialogContent>
    <DialogActions>
      <Button>Añadir tarea</Button>
    </DialogActions>
  </Dialog>;
};
