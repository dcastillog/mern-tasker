import React from 'react';
import NewProject from '../Projects/NewProject';
import ListProjects from '../Projects/ListProjects';

const Sidebar = () => {
  return(
    <aside>
      <h1>REA<span>TASK</span></h1>
      <NewProject />
      <div className="projects">
        <h2>Tus proyectos</h2>
        <ListProjects />
      </div>
    </aside>
  )
}

export default Sidebar;