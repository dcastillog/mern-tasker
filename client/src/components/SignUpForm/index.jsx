import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FormGroup, FormLabel, FormTextField, LoadingButton, SocialButton } from '../';
import { Formik, Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid, Checkbox } from '@material-ui/core';
import { lowercaseRegex, uppercaseRegex, numericRegex } from '../../utils/regex';

const style = {
  form: {
    padding: '10px',
  },
};

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short').required('Is required'),
  email: Yup.string()
    .lowercase()
    .email('Must be a valid email')
    // .notOneOf('exists@email.com', 'Email already taken')
    .required('Email is required'),
  password: Yup.string()
    .matches(lowercaseRegex, 'One lowercase required')
    .matches(uppercaseRegex, 'One uppercase required')
    .matches(numericRegex, 'One number required')
    .min(8, 'Minimum 8 characters required')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must be the same')
    .required('Confirm password please'),
});

const SignUpForm = ({ loading, onSignUp }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={style.form}>
      <Formik initialValues={initialValues} validationSchema={SignUpSchema} onSubmit={handleSubmit} validateOnChange={false}>
        {({ errors }) => {
          return (
            <Form>
              <FormGroup>
                <FormLabel label="Name" />
                <Field as={FormTextField} name="name" helperText={errors.name} error={errors.name} />
              </FormGroup>
              <FormGroup>
                <FormLabel label="Email" />
                <Field as={FormTextField} name="email" helperText={errors.email} error={errors.email} />
              </FormGroup>
              <FormGroup>
                <FormLabel label="Password" />
                <Field as={FormTextField} name="password" helperText={errors.password} error={errors.password} />
              </FormGroup>
              <FormGroup>
                <FormLabel label="Confirm password" />
                <Field
                  as={FormTextField}
                  name="passwordConfirm"
                  helperText={errors.passwordConfirm}
                  error={errors.passwordConfirm}
                />
              </FormGroup>

              <Checkbox />

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ width: '200px', margin: '15px', border: '0.5px solid #c5c7d0' }}></span>
                <span>Or sign up</span>
                <span style={{ width: '200px', margin: '15px', border: '0.5px solid #c5c7d0' }}></span>
              </div>
              <Grid container alignItems="center" justify="center">
                <SocialButton socialMedia="google" title="Google" />
                <SocialButton socialMedia="github" title="Github" />
              </Grid>

              <LoadingButton loading={loading} type="submit">
                Sign Up
              </LoadingButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

SignUpForm.propTypes = {
  loading: PropTypes.bool,
  onSignUp: PropTypes.func,
};

export default SignUpForm;
