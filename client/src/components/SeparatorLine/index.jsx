import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '16px',
    border: '0.5px solid #c5c7d0',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '120px',
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SeparatorLine = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <div className={classes.root}></div>
      {children}
      {children && <div className={classes.root}></div>}
    </div>
  );
};

SeparatorLine.propTypes = {
  children: PropTypes.func,
};

export default SeparatorLine;
