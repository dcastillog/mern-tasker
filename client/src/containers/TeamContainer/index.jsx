import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UserTeam from '../../components/UserTeam';
import EmptyTeam from '../../components/EmptyTeam';

const TeamContainer = ({ team, onSetTeam }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTeam = async (teamName) => {
    setIsLoading(true);
    const teamCode = new Date().getUTCMilliseconds();
    const teamToServer = {
      author: 12,
      name: teamName,
      code: teamCode,
      members: [],
      createdAt: new Date(),
    };

    const teamAdded = await new Promise((resolve) => {
      setTimeout(resolve, 2000, teamToServer);
    });

    onSetTeam(teamAdded);
    setIsLoading(false);
  };

  const handleJoinTeam = async (teamCode) => {
    setIsLoading(true);

    // Get Teams where Code === teamCode
    const teamFound = await new Promise((resolve) => {
      setTimeout(resolve, 2000, {
        author: 222,
        name: 'teamName',
        code: 'teamCode',
        members: [],
        createdAt: new Date(),
      });
    });

    if (!teamFound) {
      onSetTeam(teamFound);
      setIsLoading(false);
    }
  };

  if (team.length === 0) {
    return (
      <EmptyTeam
        isLoading={isLoading}
        onCreateTeam={handleCreateTeam}
        onJoinTeam={handleJoinTeam}
      />
    );
  }
  return <UserTeam team={team} />;
};

TeamContainer.propTypes = {
  team: PropTypes.array,
  onSetTeam: PropTypes.func,
};

export default TeamContainer;
