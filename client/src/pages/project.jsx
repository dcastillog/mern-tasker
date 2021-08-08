import React, { useEffect } from 'react';
import { useProjectsValue, useSelectedFilterValue } from '../contexts';
import { filteredTasksExist, getProjectName, getFilterTitle } from '../utils';
import { MainLayout } from '../layouts/main';
import TaskContainer from '../containers/TaskContainer';
import { useParams } from 'react-router-dom';
import { taskFilter } from '../utils/constants';

const ProjectPage = () => {
  const { projects } = useProjectsValue();
  const { selectedFilter } = useSelectedFilterValue();
  let projectName = 'Bandeja de entrada';

  if (projects && selectedFilter && !filteredTasksExist(selectedFilter)) {
    projectName = getProjectName(projects, selectedFilter);
  }

  if (filteredTasksExist(selectedFilter) && selectedFilter) {
    projectName = getFilterTitle(taskFilter, selectedFilter).name;
  }

  useEffect(() => {
    document.title = 'Tudu: ' + projectName;
  });

  return (
    <MainLayout>
      <h2>{projectName}</h2>
      <TaskContainer />
    </MainLayout>
  );
};

export default ProjectPage;
