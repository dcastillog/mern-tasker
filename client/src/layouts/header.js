import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  BiBell,
  BiUserCircle,
} from 'react-icons/all';
import {
  AppBar,
  InputBase,
  makeStyles,
  fade,
  Toolbar,
  Grid,
  IconButton,
} from '@material-ui/core';
import { CreateTaskQuicklyDialog } from '../components/CreateTaskQuicklyDialog';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    height: '44px',
    minHeight: '44px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.hint,
    },
    marginLeft: 0,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    width: '100%',
    transition: theme.transitions.create('width'),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.hint,
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '200px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [quicklyDialog, setQuicklyDialog] = useState(false);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={20} direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <div>
              <IconButton edge="start" color="inherit" className={classes.menuButton}>
                <AiOutlineMenu />
              </IconButton>
              <IconButton edge="start" color="inherit">
                <AiOutlineHome />
              </IconButton>
              <InputBase placeholder="Search" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Grid>
          <Grid container alignItems="center" justify="flex-end" xs={6}>
            <IconButton color="inherit" edge="start" style={{ margin: '0 25px' }} onClick={() => setQuicklyDialog(!quicklyDialog)}>
              <AiOutlinePlus />
            </IconButton>
            <IconButton color="inherit" edge="start">
              <AiOutlineQuestionCircle />
            </IconButton>
            <IconButton color="inherit" edge="start">
              <BiBell />
            </IconButton>
            <IconButton color="inherit" edge="start">
              <BiUserCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>

      <CreateTaskQuicklyDialog open={quicklyDialog} close={() => setQuicklyDialog(!quicklyDialog)} />
    </AppBar>
  );
};
