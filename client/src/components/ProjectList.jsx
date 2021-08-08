import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { ProjectListItem } from './ProjectListItem';
import { useProjectsValue, useSelectedProjectValue } from '../contexts';

export const ProjectList = () => {
  const { projects } = useProjectsValue();
  return <List>{projects && projects.map((project) => <ProjectListItem project={project} />)}</List>;
};
