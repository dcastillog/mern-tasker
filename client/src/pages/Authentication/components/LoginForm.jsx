import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormContainer, FormLabel, FormTextField, AuthButton } from './';
import { useForm } from '../../../hooks';

const style = {
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '35%',
    border: '1px solid red',
  },
};

const LoginForm = ({ email }) => {
  const [formValues, handleInputChange, reset] = useForm({ email: email, password: '' });
  const [error, setError] = useState('');

  const handleLogin = () => {
    const { email, password } = formValues;
    if (email === '' || password === '') {
    }
  };

  return (
    <div style={style.form}>
      <FormContainer>
        <FormLabel label="Email" />
        <FormTextField name="email" value={formValues.email} onChange={handleInputChange} />
      </FormContainer>
      <FormContainer>
        <FormLabel label="Password" />
        <FormTextField
          name="password"
          focused
          value={formValues.password}
          onChange={handleInputChange}
          onKeyDown={(e) => (e.key === 'enter' ? handleLogin() : '')}
        />
      </FormContainer>
      <Link>Forgot your password?</Link>

      <AuthButton onClick={handleLogin}>Login</AuthButton>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
};

export default LoginForm;
