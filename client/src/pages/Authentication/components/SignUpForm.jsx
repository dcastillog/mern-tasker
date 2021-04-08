import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormContainer, FormLabel, FormTextField, AuthButton } from './';

const style = {
  form: {
    padding: '20px',
    border: '1px solid red',
  },
};

const SignUpForm = (props) => {
  return (
    <div style={style.form}>
      <FormContainer>
        <FormLabel label="Name" />
        <FormTextField />
      </FormContainer>
      <FormContainer>
        <FormLabel label="Email" />
        <FormTextField />
      </FormContainer>
      <FormContainer>
        <FormLabel label="Confirm password" />
        <FormTextField />
      </FormContainer>
      <FormContainer>
        <FormLabel label="Password" />
        <FormTextField />
      </FormContainer>
      <Link>Forgot your password?</Link>

      <AuthButton>Sign Up</AuthButton>
    </div>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;
