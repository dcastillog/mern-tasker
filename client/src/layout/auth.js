import React from 'react';
import PropTypes from 'prop-types';

import { Grid, AppBar, makeStyles, useTheme } from '@material-ui/core';
import { SocialButton, SeparatorLine } from '../components';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    paddingTop: '30px',
  },
  footer: {
    fontSize: '16px',
    fontWeight: '400',
    margin: '20px 0',
  },
  signinWith: {
    fontSize: '17px',
    fontWeight: '500',
    color: theme.palette.text.hint,
  },
}));

const AuthLayout = ({ children, footer }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: theme.palette.secondary.dark }}>
        <Grid container alignItems="center" justify="flex-start">
          <img width="10%" src="/images/logo-dark.svg" alt="" />
        </Grid>
      </AppBar>
      <Grid alignItems="center" justify="center" direction="column" container className={classes.container}>
        {children}
        <SeparatorLine>
          <span className={classes.signinWith}>Or Sign in With</span>
        </SeparatorLine>
        <div className={classes.socialLogin}>
          <SocialButton socialMedia="google" title="Google" />
          <SocialButton socialMedia="github" title="Github" />
        </div>
        <div className={classes.footer}>{footer}</div>
      </Grid>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element,
  footer: PropTypes.element,
};

export default AuthLayout;
