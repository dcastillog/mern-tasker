import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import { useInput } from '../../hooks';
import { withAuth } from '../../hoc/withAuth';
import AuthLayout from '../../layouts/auth';
import { ErrorMessage, LoadingButton, SignUpDialog } from '../../components';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  headerTitle: {
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

const EnterEmailPage = ({}) => {
  const classes = useStyles();
  const history = useHistory();
  const [email, handleInputChange] = useInput('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickNext = async () => {
    setIsLoading(true);
    const emailSchema = Yup.string().email('Email is not valid').required('Email is required');
    await emailSchema
      .validate(email)
      .then(() => {
        history.push({
          pathname: '/login/enter-password',
          state: {
            email: email,
          },
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.errors[0]);
        setIsLoading(false);
      });
  };

  const handleOpenSignupDialog = () => {
    setOpenDialog(true);
  };

  const renderEnterEmailPageFooter = () => {
    return <Link onClick={handleOpenSignupDialog}>Don't have an account yet? Sign Up</Link>;
  };

  return (
    <AuthLayout footer={renderEnterEmailPageFooter()}>
      <Grid>
        <h2 className={classes.headerTitle}>Log in to your account</h2>
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
          {error ? <ErrorMessage message={error} /> : ''}
          <LoadingButton loading={isLoading} disabled={email.length < 1} onClick={handleClickNext}>
            Next
          </LoadingButton>
        </div>
      </Grid>
      <Link>Forgot your passowrd?</Link>
      <SignUpDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </AuthLayout>
  );
};

export default withAuth(EnterEmailPage);
