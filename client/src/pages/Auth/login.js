import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import AuthLayout from '../../layouts/auth';
import LoginForm from '../../components/LoginForm';
import { withAuth } from '../../hoc/withAuth';

const renderLoginPageFooter = () => {
  return <Link to="/login">Login to another account</Link>;
};

const LoginPage = ({ loading, alert, onShowAlert, onSignInWithEmailAndPassword, ...rest }) => {
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onShowAlert({ status: false });
  };

  return (
    <AuthLayout footer={renderLoginPageFooter()}>
      <h2>
        Log <span style={{ fontWeight: 'lighter' }}>In</span>
      </h2>
      <LoginForm
        // email={rest.location.state.email}
        loading={loading}
        onSignInWithEmailAndPassword={onSignInWithEmailAndPassword}
      />
      <Snackbar
        open={alert.status}
        autoHideDuration={4000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={alert.severity} onClose={handleAlertClose}>
          {alert.message}
        </Alert>
      </Snackbar>
    </AuthLayout>
  );
};

LoginPage.propTypes = {};

export default withAuth(LoginPage);
