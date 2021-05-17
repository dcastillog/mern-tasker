import { createContext, useEffect, useState } from 'react';

export const ProjectContext = createContext();

const Provider = ({ children }) => {
  const [userProjects, setUserProjects] = useState([]);

  const value = {
    userProjects,
    setUserProjects,
  };

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};

export default { Provider, Consumer: AuthContext.Consumer };
