import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  error: {
    fontSize: '15px',
    fontWeight: '500',
    color: theme.palette.error.main,
    margin: '5px',
  },
}));

const ErrorMessage = ({ message }) => {
  const classes = useStyles();
  return <span className={classes.error}>{message}</span>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
