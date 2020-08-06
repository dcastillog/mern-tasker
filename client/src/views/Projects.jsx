import React from 'react';

import Sidebar from '../components/Layouts/Sidebar';
import Header from '../components/Layouts/Header';
import FormTask from '../components/Tasks/FormTask';
import ListTasks from '../components/Tasks/ListTasks'

const Projects = () => {
  return(
    <div className="container-app">
      <Sidebar />
      
      <div className="main-section">
        <main>
          <Header />
          <div>
            <FormTask />

            <div className="task-container">
              <ListTasks />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects;