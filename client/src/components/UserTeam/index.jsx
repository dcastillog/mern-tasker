import React from 'react';
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
} from '@material-ui/core';

const UserTeam = ({ team }) => {
  return (
    <Card style={{ width: '100%', padding: '0' }}>
      <Container>
        <Typography variant={'h5'}>Team Name</Typography>
        <span>Code: 3230</span>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>I</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary="July 20 2014" />
          </ListItem>
          <ListItemSecondaryAction>
            <Chip label="Owner" />
          </ListItemSecondaryAction>
        </List>
      </Container>
    </Card>
  );
};

UserTeam.propTypes = {
  team: PropTypes.object,
};

export default UserTeam;
