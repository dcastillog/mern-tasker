import React from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    padding: theme.spacing(5),
    margin: theme.spacing(10, 5),
    border: '1px solid red',
    width: '100%',
  },
}));

export const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};
