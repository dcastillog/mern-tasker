import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import { AuthContext } from '../contexts/auth';
import Header from './header';
import Sidebar from './sidebar';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    margin: `90px ${theme.spacing(7) + 1}px`,
    border: '1px solid blue',
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, removeAuth } = useContext(AuthContext);
  const handleIsOpenDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Header user={user} onLogout={removeAuth} isOpenDrawer={isOpenDrawer} />
      <Sidebar isOpen={isOpenDrawer} onClickClose={handleIsOpenDrawer} />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default MainLayout;
