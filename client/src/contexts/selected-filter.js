import React, { createContext, useContext, useState } from 'react';

export const SelectedFilterContext = createContext();
export const SelectedFilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('INBOX');

  return (
    <SelectedFilterContext.Provider value={{ selectedFilter, setSelectedFilter }}>{children}</SelectedFilterContext.Provider>
  );
};

export const useSelectedFilterValue = () => useContext(SelectedFilterContext);
