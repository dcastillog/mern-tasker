import React from 'react';
import PropTypes from 'prop-types';

import { HiOutlineTrash } from 'react-icons/hi';
import { MdAssignmentInd } from 'react-icons/md';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
  Tooltip,
  Input,
  Divider,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
    marginRight: '80px',
  },
}));

const TaskList = ({ tasks = [], onRemove, onToggle }) => {
  const classes = useStyles();

  const handleRemoveTask = (id) => {
    onRemove(id);
  };

  return (
    <List>
      {tasks.map((task) => {
        return (
          <ListItem key={task.id}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.isCompleted}
                onClick={onToggle(!task.isCompleted)}
              />
            </ListItemIcon>
            <Input value={task.text} className={classes.input} />
            <ListItemSecondaryAction>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleRemoveTask(task.id)}>
                  <HiOutlineTrash />
                </IconButton>
              </Tooltip>
              <Tooltip title="Assign To">
                <IconButton>
                  <MdAssignmentInd />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <Divider />
      <ListItem>
        <ListItemIcon>
          <Checkbox edge="start" checked />
        </ListItemIcon>
        <Input disabled readOnly value="Task1" className={classes.input} />
      </ListItem>
    </List>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onRemove: PropTypes.func,
  onToggle: PropTypes.func,
};

export default TaskList;

// import React, { Fragment, useContext } from "react";
// import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";
// import Task from "../Task";

// import { CSSTransition, TransitionGroup } from "react-transition-group";

// import { ProjectContext } from "../../contexts/project";
// import { TaskContext } from "../../contexts/task";

// export default function TaskList() {
//   const { project, deleteProject } = useContext(ProjectContext);
//   const { tasksproject } = useContext(TaskContext);

//   // Si no hay proyecto seleccionado
//   if (!project) return <h2>Selecciona un proyecto</h2>;

//   // Array destructuring para extraer proyecto actual
//   const [currentProject] = project;

//   const tasks = tasksproject;

//   const handleClickDelete = () => {
//     deleteProject(currentProject._id);
//   };

//   return (
//     <Fragment>
//       <h2>Proyecto: {currentProject.name}</h2>
//       <ul className="list-tasks">
//         {tasks?.length === 0 ? (
//           <li className="task">
//             <p>No hay tareas</p>
//           </li>
//         ) : (
//           <TransitionGroup>
//             {tasks?.map((task) => (
//               <CSSTransition key={task.id} timeout={200} classNames="task">
//                 <Task task={task} />
//               </CSSTransition>
//             ))}
//           </TransitionGroup>
//         )}
//       </ul>

//       <Container maxWidth="sm">
//         <Button
//           type="button"
//           variant="contained"
//           color="secondary"
//           onClick={handleClickDelete}
//           fullWidth
//         >
//           Eliminar Proyecto
//         </Button>
//       </Container>
//     </Fragment>
//   );
// }
