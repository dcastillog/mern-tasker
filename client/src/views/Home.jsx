import React, { useContext, useEffect } from 'react';

import MainLayout from '../layout';

import { TaskList, TaskForm } from '../components';

import { ProjectContextProvider } from '../contexts/project';
import { TaskContextProvider } from '../contexts/task';
import { AuthContext } from '../contexts/auth';

export default function Home() {
  const { getAuthenticatedUser } = useContext(AuthContext);

  useEffect(() => {
    getAuthenticatedUser();
  }, []);

  return (
    <ProjectContextProvider>
      <TaskContextProvider>
        <MainLayout>
          <TaskForm />
          <div className="task-container">
            <TaskList />
          </div>
        </MainLayout>
      </TaskContextProvider>
    </ProjectContextProvider>
  );
}
