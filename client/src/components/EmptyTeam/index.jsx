import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Button } from '@material-ui/core';

import JoinTeamDialog from '../JoinTeamDialog';
import CreateTeamDialog from '../CreateTeamDialog';

const style = {
  button: {
    width: '35%',
    margin: '10px auto',
  },
};

const EmptyTeam = ({ isLoading, onCreateTeam, onJoinTeam }) => {
  const [openJoinTeam, setOpenJoinTeam] = useState(false);
  const [openCreateTeam, setOpenCreateTeam] = useState(false);

  return (
    <Container>
      <Grid container direction="column" alignItems="center" justify="center">
        <h1>You don´t have a team</h1>
        <p>You can create a team or you can join one with the code</p>
        <Button
          size="large"
          color="primary"
          variant="contained"
          style={style.button}
          onClick={() => setOpenCreateTeam(!openCreateTeam)}
        >
          Create Team
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          style={style.button}
          onClick={() => setOpenJoinTeam(!openJoinTeam)}
        >
          Join Team
        </Button>
      </Grid>

      <JoinTeamDialog
        open={openJoinTeam}
        isLoading={isLoading}
        onClose={() => setOpenJoinTeam(!openJoinTeam)}
        onJoinTeam={onJoinTeam}
      />
      <CreateTeamDialog
        open={openCreateTeam}
        isLoading={isLoading}
        onClose={() => setOpenCreateTeam(!openCreateTeam)}
        onCreateTeam={onCreateTeam}
      />
    </Container>
  );
};

EmptyTeam.propTypes = {
  isLoading: PropTypes.bool,
  onCreateTeam: PropTypes.func,
  onJoinTeam: PropTypes.func,
};

export default EmptyTeam;
