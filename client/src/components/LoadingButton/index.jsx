import React from 'react';
import PropTypes from 'prop-types';

import { TiArrowRightThick } from 'react-icons/ti';
import { Button, CircularProgress } from '@material-ui/core';

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

const LoadingButton = ({ children, type = 'button', loading, disabled, onClick }) => {
  return (
    <Button
      type={type}
      style={style.button}
      disabled={disabled}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
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

LoadingButton.propTypes = {
  children: PropTypes.element,
  type: PropTypes.oneOf(['button', 'submit']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LoadingButton;
