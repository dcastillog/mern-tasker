import React, { useState } from 'react';
import { useHistory, Link, useRouteMatch } from 'react-router-dom';
import { FaInbox, FaRegCalendarAlt, MdToday, FiChevronDown, FiChevronRight, HiOutlinePlus } from 'react-icons/all';
import { ProjectList } from '../components/ProjectList';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  makeStyles,
  DialogTitle,
  TextField,
  ListItemSecondaryAction,
  Select,
  MenuItem,
  Switch,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { FaTrashAlt } from 'react-icons/fa';
import { Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { useProjectsValue, useSelectedFilterValue, useTeamsValue } from '../contexts';
import SidebarCollapseItem from '../components/SidebarCollapseItem';
import SidebarListItem from '../components/SidebarListItem';
import ProjectDialog from '../components/ProjectFormDialog';
import ProjectFormDialog from '../components/ProjectFormDialog';

const drawerWidth = 305;

const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
    paddingTop: '44px',
  },
}));

export const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [createProjectDialog, setCreateProjectDialog] = useState(false);
  const { setSelectedFilter } = useSelectedFilterValue();
  const { projects } = useProjectsValue();
  const { teams } = useTeamsValue();

  const handleCreateProject = () => setCreateProjectDialog(!createProjectDialog)

  const handleCreateTeam = () => {
    console.log('handle team')
  }

  return (
    <Drawer
      className={classes.root}
      classes={{ paper: classes.paper }}
      variant="permanent"
      onMouseOut={() => null}
      onMouseLeave={() => null}
    >
      <div style={{ border: '1px solid red', margin: '20px' }}>
        <List>
          <SidebarListItem
            text="Bandeja de entrada"
            icon={<FaInbox />}
            onClick={() => {
              setSelectedFilter('1');
              history.push('/app/project/1');
            }}
          />
          <SidebarListItem
            text="Hoy"
            icon={<MdToday />}
            onClick={() => {
              setSelectedFilter('TODAY');
              history.push('/app/today');
            }}
          />
          <SidebarCollapseItem text="Proyectos" baseLink="/app/project" deleteButton items={projects} onCreate={handleCreateProject}/>
          <SidebarCollapseItem text="Teams" baseLink="/app/team" items={teams} onCreate={handleCreateTeam} />
        </List>
      </div>
      <ProjectFormDialog open={createProjectDialog} close={() => setCreateProjectDialog(!createProjectDialog)} />
    </Drawer>
  );
};
