import React from 'react';
import AuthLayout from '../layouts/auth';
import { LoginForm } from '../components';

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
