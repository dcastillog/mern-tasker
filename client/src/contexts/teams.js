import React, { createContext, useContext } from 'react';
import { useTeams } from '../hooks';

export const TeamsContext = createContext();
export const TeamsProvider = ({ children }) => {
  const { teams, setTeams } = useTeams();

  return <TeamsContext.Provider value={{ teams, setTeams }}>{children}</TeamsContext.Provider>;
};

export const useTeamsValue = () => useContext(TeamsContext);
