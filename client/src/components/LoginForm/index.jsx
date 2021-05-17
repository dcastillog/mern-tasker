import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks';
import { FormGroup, FormLabel, FormTextField, LoadingButton } from '../';
import { Checkbox, Divider, Grid, makeStyles } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { lowercaseRegex, numericRegex, uppercaseRegex } from '../../utils/regex';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string().lowercase().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ email, loading, onSignInWithEmailAndPassword }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const classes = useStyles();

  const handleSubmit = async (data) => {
    console.log(data);
    await onSignInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className={classes.form}>
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
                  onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit : '')}
                />
              </FormGroup>

              <Grid container alignItems="center" justify="center">
                <Checkbox />
                <label htmlFor="">Mantenerme dentro de mi sesión</label>
              </Grid>

              <Grid container alignItems="center" justify="center">
                <Link>Forgot your password?</Link>
              </Grid>

              <Grid container alignItems="center" justify="center">
                <span>
                  ¿No tienes cuenta? <Link color="">Regístrate</Link>
                </span>
              </Grid>

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
