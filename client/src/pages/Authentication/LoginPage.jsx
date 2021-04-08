import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { makeStyles, Dialog, TextField } from '@material-ui/core';

import { useInput } from '../../hooks';
import AuthLayout from '../../layout/auth';
import AuthButton from './components/AuthButton';
import Error from '../../components/Error';
import SignUpDialog from './SignUpDialog';

const useStyles = makeStyles((theme) => ({
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
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [email, handleInputChange] = useInput('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickNext = async () => {
    setIsLoading(true);

    if (email === '' || email.length < 5) {
      setError('Email is required');
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 2000, email);
    });

    if (error.length === 0) {
      history.push({
        pathname: '/login/enter-password',
        state: {
          email: email,
        },
      });
    }
    setIsLoading(false);
  };

  const handleOpenSignupDialog = () => {
    setOpenDialog(true);
  };

  const renderLoginPageFooter = () => {
    return <Link onClick={handleOpenSignupDialog}>Don't have an account yet? Sign Up</Link>;
  };

  return (
    <AuthLayout footer={renderLoginPageFooter()}>
      <div className={classes.emailContainer}>
        <h2 className={classes.loginHeader}>Log in to your account</h2>
        <div className={classes.inputWrapper}>
          <span className={classes.inputHelp}>Enter your work email address</span>
          <TextField
            focused
            autoFocus
            className={classes.inputEmail}
            value={email}
            onChange={handleInputChange}
            placeholder="example@company.com"
            variant="outlined"
            onKeyDown={(e) => (e.key === 'Enter' ? handleClickNext() : '')}
          />
          {error ? <Error message={error} /> : ''}
          <AuthButton loading={isLoading} disabled={email.length < 1} onClick={handleClickNext}>
            Next
          </AuthButton>
        </div>
      </div>

      <SignUpDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </AuthLayout>
  );
};

export default LoginPage;
