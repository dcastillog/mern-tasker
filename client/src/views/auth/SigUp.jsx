import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { CSSTransition } from 'react-transition-group';

import AlertContext from '../../contexts/alerts/alertContext';
import AuthContext from '../../contexts/auth/authContext';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SigUp = (props) => {
  // Extraer valores del context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { msg, auth, registerUser } = authContext;

  // Verifica si el usuario esta autenticado o registrado
  useEffect(() => {
    if(auth){
      props.history.push('/projects')
    }

    if(msg){
      showAlert(msg.msg, msg.category);
    }
  }, [msg, auth, props.history])

  // State para iniciar sesión
  const [user, saveUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // Extraer de user
  const{ name, email, password, confirmPassword } = user; 

  const handleChange = e => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if( name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''){
      showAlert('Todos los campos son obligatorios','error')
      return;
    }

    if(password.length < 6){
      showAlert('La contraseña debe ser de al menos 6 caracteres','error')
      return;
    }

    if(password != confirmPassword){
      showAlert('Ambas contraseñas deben ser iguales','error');
      return; 
    }


    // Pasarlo a action
    registerUser({
      name,
      email,
      password
    });

  }


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirmar contraseña"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={handleChange}
          />
          { alert ? (
            <Alert severity={alert.category}>{alert.msg}</Alert>
          ): null }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/">
                Volver a iniciar sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SigUp;