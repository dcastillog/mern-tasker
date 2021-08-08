import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Avatar,
  Typography,
  Container,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  CircularProgress, Box
} from '@material-ui/core';

const TeamDetail = ({ team }) => {
  const [joinTeamDialog, setJoinTeamDialog] = useState(false);
  const [createTeamDialog, setCreateTeamDialog] = useState(false);


  const renderEmptyTeam = () => {
    return (
      <Card>
        <Grid justify={'center'} alignItems={'center'} container direction={'column'}>
          <Grid item>
            <Typography variant={'h5'}>You don´t have tasks</Typography>
          </Grid>
          <Grid item>
            <span>Here you will be able to see the tasks you create and the ones assigned to you</span>
          </Grid>
          <Button style={{margin: '10px', width: '350px'}} onClick={() => setCreateTeamDialog(!createTeamDialog)} variant={"contained"} color={"primary"}>Create team</Button>
          <Button style={{margin: '10px', width: '350px'}} onClick={() => setJoinTeamDialog(!joinTeamDialog)} variant={'contained'} >Join team</Button>
        </Grid>
      </Card>
    )
  }

  return (
    <Fragment>
      {1 == 1
      ? renderEmptyTeam()
      : <Card style={{ width: '100%', padding: '0' }}>
        <Container>
          <Typography variant={'h5'} style={{margin: '10px'}}>Team Name</Typography>
          <span style={{ margin: '10px' }}>Code: 3230</span>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>I</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Juanito perez" secondary="July 20 2014" />
              <ListItemSecondaryAction>
                <Chip label="Owner" />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>I</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Juanito perez" secondary="July 20 2014" />
            </ListItem>
          </List>
        </Container>
      </Card>}

      <Dialog open={joinTeamDialog} close={() => setJoinTeamDialog(!joinTeamDialog)}>
        <DialogTitle>Join team</DialogTitle>
        <DialogContent>
          <DialogContentText>Ask the team builder for the class code, and then enter it here.</DialogContentText>
          <TextField fullWidth={true} variant={"outlined"} placeholder={"Team code"} />
        </DialogContent>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
        <DialogActions>
          <Button onClick={() => setJoinTeamDialog(!joinTeamDialog)}>Cancel</Button>
          <Button>Join team</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={createTeamDialog} close={() => setCreateTeamDialog(!createTeamDialog)}>
        <DialogTitle>Create a team</DialogTitle>
        <DialogContent>
          <DialogContentText>You can create a team and then share code with your team members, split your work sharing tasks with your team</DialogContentText>
          <TextField fullWidth={true} variant={"outlined"} placeholder={"Team name"} />
        </DialogContent>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
        <DialogActions>
          <Button onClick={() => setCreateTeamDialog(!createTeamDialog)}>Cancel</Button>
          <Button>Create team</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

TeamDetail.propTypes = {
  team: PropTypes.object,
};

export default TeamDetail;
