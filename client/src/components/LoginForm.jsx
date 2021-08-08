import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {Checkbox, Card, TextField, makeStyles, Box, InputAdornment, IconButton, Button} from '@material-ui/core';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string().lowercase().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState({ showPassword: false });
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (data) => {
    console.log(data);
  };
  const handleClickShowPassword = () => {
    setToggle({ ...toggle, showPassword: !toggle.showPassword });
  };
  const handleClickShowRegisterDialog = () => {};

  return (
    <Card style={{ width: '450px', padding: '25px' }}>
      <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg" alt="" />
      <h1>Iniciar sesión</h1>
      <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
        {({ errors }) => {
          return (
            <Form className={classes.form}>
              <Box display="flex" flexDirection="column" width="100%">
                <label htmlFor="">Email</label>
                <TextField variant="outlined" size="small" style={{ margin: '10px 0' }} />
              </Box>
              <Box display="flex" flexDirection="column" width="100%">
                <label htmlFor="">Contraseña</label>
                <TextField
                  variant="outlined"
                  size="small"
                  style={{ margin: '10px 0' }}
                  type={toggle.showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {toggle.showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <div>
                <Box>
                  <Checkbox />
                  <span>Matenerme dentro de mi sesión</span>
                </Box>
                <Box>
                  <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                </Box>
                <Box>
                  <span>¿No tienes cuenta?</span>
                  <Link onClick={handleClickShowRegisterDialog}>Regístrate</Link>
                </Box>
              </div>
              <Button type="submit">
                Inicia sesión
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
};

export default LoginForm;
