import React, { useContext } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import { UIContext } from '../contexts/ui';
import { AppBar, Sidebar } from './components';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -theme.drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();
  const { isOpenDrawer } = useContext(UIContext);

  return (
    <div style={{ display: 'flex' }}>
      <AppBar />
      <Sidebar />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpenDrawer,
        })}
      >
        {props.children}
      </main>
    </div>
  );
};

export default MainLayout;
