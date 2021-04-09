import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthLayout from '../../layout/auth';
import LoginForm from './components/LoginForm';
import { withAuthWrapper } from '../../hoc/withAuthWrapper';

const renderEnterPasswordPageFooter = () => {
  return <Link to="/login">Login to another account</Link>;
};

const EnterPasswordPage = ({ loading, onSignInWithEmailAndPassword, ...rest }) => {
  return (
    <AuthLayout footer={renderEnterPasswordPageFooter()}>
      <h2>
        Log <span style={{ fontWeight: 'lighter' }}>In</span>
      </h2>
      <LoginForm email={rest.location.state.email} onSignInWithEmailAndPassword={onSignInWithEmailAndPassword} />
    </AuthLayout>
  );
};

EnterPasswordPage.propTypes = {};

export default withAuthWrapper(EnterPasswordPage);
