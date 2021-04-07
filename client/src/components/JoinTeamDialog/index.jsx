import React from 'react';
import PropTypes from 'prop-types';

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

import { useInput } from '../../hooks';

const JoinTeamDialog = ({ isLoading, open, onClose, onJoinTeam }) => {
  const [teamCode, handleInputChange, reset] = useInput('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (teamCode) {
        onJoinTeam(teamCode);
        reset();
      }
    }
  };

  const handleJoinTeam = () => {
    onJoinTeam(teamCode);
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle>Join team</DialogTitle>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <DialogContent>
          <DialogContentText>
            Ask the team builder for the class code and then enter it here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Team Code"
            type="text"
            fullWidth
            value={teamCode}
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
          disabled={teamCode.length < 1}
          variant="contained"
          onClick={handleJoinTeam}
        >
          Join Team
        </Button>
      </DialogActions>
    </Dialog>
  );
};

JoinTeamDialog.propTypes = {
  isLoading: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onJoinTeam: PropTypes.func,
};

export default JoinTeamDialog;
