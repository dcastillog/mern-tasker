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

import AlertContext from '../../contexts/alerts/alertContext';
import AuthContext from '../../contexts/auth/authContext';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SigIn = (props) => {

  // Extraer valores del context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { msg, auth, login } = authContext;

  // Verifica si que el password o usuario exista
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
    email: '',
    password: ''
  })

  // Extraer de user
  const{ email, password } = user; 

  const handleChange = e => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if(email.trim() === '' || password.trim() === ''){
      showAlert('Todos los campos son obligatorios','error')
      return;
    }

    // Pasarlo a action
    login({email, password})
  }


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            Iniciar sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sigup">
                No tienes una cuenta? Regístrate
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SigIn;