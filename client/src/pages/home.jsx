import React from 'react';
import { MainLayout } from '../layouts/main';
import TaskContainer from '../containers/TaskContainer';

const HomePage = () => {
  return (
    <MainLayout>
      <TaskContainer />
    </MainLayout>
  );
};

export default HomePage;
