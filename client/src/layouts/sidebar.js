import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import {
  Divider,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Collapse,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { HiMenuAlt1, HiChevronLeft, HiChevronRight, HiChevronDown, HiOutlinePlus, FaTasks } from 'react-icons/all';

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

const Sidebar = ({ isOpen, onClickClose }) => {
  const classes = useStyles();
  const history = useHistory();
  const [openProjects, setOpenProjects] = React.useState(false);
  const [openTags, setOpenTags] = React.useState(false);
  const [openFilters, setOpenFilters] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const colors = [{ name: 'Rojo' }, { name: 'Azul' }];

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
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClickClose}>{isOpen ? <HiChevronLeft /> : <HiMenuAlt1 />}</IconButton>
      </div>
      {isOpen ? <h1>tudu</h1> : <div></div>}
      <Divider />
      <aside>
        <List>
          <ListItem button onClick={() => history.push('/home')}>
            <ListItemIcon>
              <FaTasks />
            </ListItemIcon>
            <ListItemText primary="My Tasks" />
          </ListItem>
          {/* <ListItem>
            <ListItemText>Today</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Upcoming</ListItemText>
          </ListItem> */}
          <ListItem button onClick={() => setOpenProjects(!openProjects)}>
            <ListItemIcon>{openProjects ? <HiChevronDown /> : <HiChevronRight />}</ListItemIcon>
            <ListItemText primary="My Projects" />
            {show && (
              <ListItemSecondaryAction>
                <IconButton onClick={() => setOpenDialog(true)}>
                  <HiOutlinePlus />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
          <Collapse in={openProjects} timeout="auto" unmountOnExit>
            <List>
              <ListItem button onClick={() => history.push('project/1')}>
                <ListItemText>Projcet</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Projcet</ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => setOpenTags(!openTags)}>
            <ListItemIcon>{openTags ? <HiChevronDown /> : <HiChevronRight />}</ListItemIcon>
            <ListItemText primary="Tags" />
          </ListItem>
          <Collapse in={openTags} timeout="auto" unmountOnExit>
            <List>
              <ListItem>
                <ListItemText>Projcet</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Projcet</ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => setOpenFilters(!openFilters)}>
            <ListItemIcon>{openFilters ? <HiChevronDown /> : <HiChevronRight />}</ListItemIcon>
            <ListItemText primary="Filters" />
          </ListItem>
          <Collapse in={openFilters} timeout="auto" unmountOnExit>
            <List>
              <ListItem>
                <ListItemText>Projcet</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Projcet</ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </List>
        {/* Dialog */}
        <Dialog open={openDialog} close={() => setOpenDialog(false)}>
          <DialogTitle>Añadir proyecto</DialogTitle>
          <DialogContent>
            <TextField autoFocus variant="outlined" margin="dense" id="name" label="Nombre" type="email" fullWidth />
            <Autocomplete
              id="combo-box-colors"
              options={colors}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
          </DialogContent>
          <DialogActions>
            <Button color="transparent" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button color="primary">Add</Button>
          </DialogActions>
        </Dialog>
      </aside>
    </Drawer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClickClose: PropTypes.func,
};

export default Sidebar;
