import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  useTheme,
} from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { ProjectForm, ProjectList } from '../../../components';

import { UIContext } from '../../../contexts/ui';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
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

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { isOpenDrawer, closeDrawer } = useContext(UIContext);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpenDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <h1>
        TAS<span>KER</span>
      </h1>
      <Divider />
      <aside>
        <ProjectForm />
        <div className="projects">
          <h2>Tus proyectos</h2>
          <ProjectList />
        </div>
      </aside>
    </Drawer>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
