import React, { useContext } from 'react';

export const ApiContext = React.createContext(null);

export const useApiContext = () => useContext(ApiContext);
