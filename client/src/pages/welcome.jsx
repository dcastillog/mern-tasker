import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Toolbar, Grid, Divider, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  titleContainer: {
    padding: '30px 130px',
  },
  title: {
    textAlign: 'center',
    fontSize: '80px',
  },
  startsNowButton: {
    borderRadius: '20px',
    fontSize: '24px',
    fontWeight: '600',
    textTransform: 'none',
  },
  appBarButton: {
    textTransform: 'none',
    padding: '10px 20px',
    color: theme.palette.text.hint,
    fontSize: '20px',
    border: 'none',
  },
  signUpText: {
    color: theme.palette.primary.main,
  },
}));

const WelcomePage = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <AppBar color="white" elevation="0">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <img width="70%" src="/images/logo-light.svg" alt="" />
            </Grid>
            <Grid>
              <Button variant="outlined" className={classes.appBarButton} onClick={() => history.push('/login')}>
                Login
              </Button>
              <Button variant="outlined" className={classes.appBarButton}>
                <span className={classes.signUpText}>Registrarse</span>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>
            Organízalo todo con <strong>tudu</strong>
          </h1>
        </div>
        <Grid container alignItems="center" justify="center">
          <Button variant="contained" color="primary" size="large" className={classes.startsNowButton}>
            Comienza ahora
          </Button>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <img color="primary" width="50%" src="images/remote-team.svg" alt="Empty task" />
        </Grid>
        <Grid>
          <img
            width="100%"
            src="https://todoist.com/_next/static/images/screenshot@2x_e9fa6ecca1a46e57105e63d832171f15.webp"
          />
        </Grid>
        <Grid>
          <h1 className={classes.title}>Aprovecha tus tareas al máximo</h1>
          <p style={{ textAlign: 'center' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus dolorum soluta reprehenderit alias.
            Non porro quod molestiae est quasi impedit eaque, ducimus cupiditate suscipit ullam fugit maxime quidem
            perspiciatis..
          </p>
        </Grid>
      </main>
      <Divider></Divider>
      <footer className={classes.root}>
        <Grid container alignItems="center" justify="space-around">
          <Grid item>Social buttons</Grid>
          <Grid item>
            <span>MIT License 2021</span>
            <span>Created By: </span>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default WelcomePage;
