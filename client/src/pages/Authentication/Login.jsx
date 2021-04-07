import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  CssBaseline,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import { AuthContext } from "../../contexts/auth";
// import { UIContext } from "../../contexts/ui";

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

const Login = (props) => {
  // const { alert, showAlert } = useContext(UIContext);
  // const { msg, isAuthenticated, login } = useContext(AuthContext);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push("/projects");
  //   }

  //   if (msg) {
  //     showAlert(msg.msg, msg.category);
  //   }
  // }, [msg, isAuthenticated, props.history]);

  // const [user, saveUser] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = user;

  // const handleChange = (e) => {
  //   saveUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (email.trim() === "" || password.trim() === "") {
  //     showAlert("Todos los campos son obligatorios", "error");
  //     return;
  //   }
  //   login({ email, password });
  // };

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <img width="70%" src="/login.svg" alt="Login" />
        </Grid>
        <Grid item md="4">
          <Typography component={'h1'} variant="h5">
            Iniciar sesión
          </Typography>
          <form className={classes.form} noValidate>
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
              // value={email}
              // onChange={handleChange}
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
              // value={password}
              // onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* {alert ? <Alert severity={alert.category}>{alert.msg}</Alert> : null} */}
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
                <Link to="/signup">No tienes una cuenta? Regístrate</Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
