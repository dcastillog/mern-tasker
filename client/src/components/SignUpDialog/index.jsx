import React from 'react';

import PropTypes from 'prop-types';
import { SignUpForm } from '../';
import { Dialog, IconButton } from '@material-ui/core';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const style = {
  dialogTitle: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  dialogTitleIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
};

const SignUpDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} fullWidth>
      <div style={style.dialogTitle}>
        <h2 style={{ margin: '15px' }}>
          Sign <span style={{ fontWeight: 'lighter' }}>Up</span>
        </h2>
        <div style={style.dialogTitleIcon}>
          <IconButton onClick={onClose}>
            <AiOutlineCloseCircle />
          </IconButton>
        </div>
      </div>
      <SignUpForm />
    </Dialog>
  );
};

SignUpDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SignUpDialog;
