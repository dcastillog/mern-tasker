import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks';
import { FormGroup, FormLabel, FormTextField, LoadingButton } from '../';
import { Checkbox, Divider, Grid } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { lowercaseRegex, numericRegex, uppercaseRegex } from '../../utils/regex';

const style = {
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '35%',
  },
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().lowercase().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ email, loading, onSignInWithEmailAndPassword }) => {
  const initialValues = {
    email: email,
    password: '',
  };

  const handleSubmit = () => {
    onSignInWithEmailAndPassword();
  };

  return (
    <div style={style.form}>
      <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit} validateOnChange={false}>
        {({ errors }) => {
          return (
            <Form>
              <FormGroup>
                <FormLabel label="Email" />
                <Field as={FormTextField} name="email" error={errors.email} helperText={errors.email} />
              </FormGroup>
              <FormGroup>
                <FormLabel label="Password" />
                <Field
                  as={FormTextField}
                  name="password"
                  type="password"
                  error={errors.password}
                  helperText={errors.password}
                  focused
                  onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : '')}
                />
              </FormGroup>

              <Grid container>
                <Checkbox />
                <label htmlFor="">Mantenerme dentro de mi sesión</label>
              </Grid>

              <Link>Forgot your password?</Link>

              <span>
                ¿No tienes cuenta? <Link color="">Regístrate</Link>
              </span>

              <LoadingButton type="submit" loading={loading}>
                Login
              </LoadingButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  loading: PropTypes.bool,
  onSignInWithEmailAndPassword: PropTypes.func,
};

export default LoginForm;
