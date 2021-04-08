import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthLayout from '../../layout/auth';
import LoginForm from './components/LoginForm';

const renderEnterPasswordPageFooter = () => {
  return <Link to="/login">Login to another account</Link>;
};

const EnterPasswordPage = (props) => {
  return (
    <AuthLayout footer={renderEnterPasswordPageFooter()}>
      <h2>
        Log <span style={{ fontWeight: 'lighter' }}>In</span>
      </h2>
      <LoginForm email={props.location.state.email} />
    </AuthLayout>
  );
};

EnterPasswordPage.propTypes = {};

export default EnterPasswordPage;
