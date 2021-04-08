import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TiArrowRightThick } from 'react-icons/ti';
import { useHistory } from 'react-router-dom';

const style = {
  button: {
    marginTop: '15px',
    borderRadius: '20px',
    textTransform: 'none',
    padding: '12px',
    fontSize: '18px',
    width: '100%',
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '25px',
    height: '25px',
    marginLeft: '5px',
  },
};

const AuthButton = ({ children, loading, disabled, onClick }) => {
  return (
    <Button style={style.button} disabled={disabled} onClick={onClick} variant="contained" color="primary">
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <div style={style.buttonContent}>
          {children}
          <TiArrowRightThick style={style.icon} />
        </div>
      )}
    </Button>
  );
};

AuthButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AuthButton;
