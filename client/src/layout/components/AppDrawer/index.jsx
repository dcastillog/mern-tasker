import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Divider, Drawer, IconButton, makeStyles, useTheme } from '@material-ui/core';
import { HiMenuAlt1, HiChevronLeft } from 'react-icons/hi';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: theme.spacing(7) + 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaper: {
    width: theme.drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',

    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const AppDrawer = ({ isOpen, onClickClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
      variant="permanent"
      anchor="left"
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClickClose}>{isOpen ? <HiChevronLeft /> : <HiMenuAlt1 />}</IconButton>
      </div>
      {isOpen ? (
        <h1>
          TAS<span>KER</span>
        </h1>
      ) : (
        <div></div>
      )}
      <Divider />
      <aside>
        {/* <ProjectForm />
        <div className="projects">
          <h2>Tus proyectos</h2>
          <ProjectList />
        </div> */}
      </aside>
    </Drawer>
  );
};

AppDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClickClose: PropTypes.func,
};

export default AppDrawer;
