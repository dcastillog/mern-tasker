import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  AppBar,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TiArrowRightThick } from 'react-icons/ti';

import SocialButton from '../../components/SocialButton';
import { useInput } from '../../hooks';
// import { AuthContext } from "../../contexts/auth";
// import { UIContext } from "../../contexts/ui";

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  emailContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  loginHeader: {
    fontSize: '40px',
    fontWeight: '300',
    fontFamily: 'Roboto, sans-serif',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px',
  },
  inputHelp: {
    fontWeight: '500',
    fontSize: '16px',
    height: '20px',
    marginBottom: '4px',
  },
  inputEmail: {
    marginBottom: '1px',
  },
  nextButton: {
    marginTop: '15px',
    borderRadius: '20px',
    textTransform: 'none',
    padding: '12px',
    fontSize: '18px',
  },
  nextButtonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextIcon: {
    width: '25px',
    height: '25px',
    marginLeft: '5px',
  },
  separatorLine: {
    width: '200px',
    margin: '16px',
    border: '0.5px solid #c5c7d0',
  },
  loginSeparator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFooter: {
    fontSize: '16px',
    fontWeight: '400',
    margin: '20px 0',
  },
  error: {
    fontSize: '15px',
    fontWeight: '500',
    color: theme.palette.error.main,
    margin: '5px',
  },
}));

const AuthLayout = ({ children, footer }) => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [email, handleInputChange] = useInput('');
  const [error, setError] = useState('');

  const handleClickNext = async () => {
    setIsLoading(true);

    if (email === '') {
      setError('Email is required');
    }

    const emailVerified = await new Promise((resolve) => {
      setTimeout(resolve, 2000, email);
    });
    setIsLoading(false);

    history.push('/login/enter-password');
  };

  return (
    <div className={classes.root}>
      <AppBar>Tasker</AppBar>
      <Grid alignItems="center" justify="center" direction="column" container style={{ height: '100vh' }}>
        {children}
        <div className={classes.loginSeparator}>
          <div className={classes.separatorLine}></div>
          <span style={{ fontSize: '17px', fontWeight: '200' }}>Or Sign in With</span>
          <div className={classes.separatorLine}></div>
        </div>
        <div className={classes.socialLogin}>
          <SocialButton socialMedia="google" title="Google" />
          <SocialButton socialMedia="github" title="Github" />
        </div>
        <div className={classes.loginFooter}>{footer}</div>
      </Grid>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element,
  footer: PropTypes.element,
};

export default AuthLayout;
