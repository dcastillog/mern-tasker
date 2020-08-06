import React from 'react';
import Button from '@material-ui/core/Button';

const Project = ({project}) => {
  return(
    <li>
      <Button 
        type="button"
      >{project.name}</Button>
    </li>
  );
}

export default Project;