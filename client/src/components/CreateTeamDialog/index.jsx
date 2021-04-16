import React from 'react';
import PropTypes from 'prop-types';

import { useInput } from '../../hooks';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  CircularProgress,
} from '@material-ui/core';

const CreateTeamDialog = ({ open, isLoading, onClose, onCreateTeam }) => {
  const [teamName, handleInputChange, reset] = useInput('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (teamName) {
        onCreateTeam(teamName);
        reset();
      }
    }
  };

  const handleCreateTeam = () => {
    if (teamName) {
      onCreateTeam(teamName);
      reset();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle>Create a team</DialogTitle>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <DialogContent>
          <DialogContentText>
            You can create a team and then share code with your team members, split your work
            sharing tasks with your team
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Team Name"
            type="text"
            fullWidth
            value={teamName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </DialogContent>
      )}
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          color="primary"
          disabled={teamName.length < 1}
          variant="contained"
          onClick={handleCreateTeam}
        >
          Create Team
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreateTeamDialog.propTypes = {
  isLoading: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onCreateTeam: PropTypes.func,
};

export default CreateTeamDialog;
