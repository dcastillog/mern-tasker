import React from 'react';
import PropTypes from 'prop-types';

import { HiOutlineTrash, MdAssignmentInd } from 'react-icons/all';
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

const TaskList = ({ tasks = [], onDelete, onUpdate, onEdit, onToggle }) => {
  const classes = useStyles();

  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <List>
      {tasks.map((task) => {
        if (!task.isCompleted) {
          return (
            <ListItem key={task._id}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.isCompleted}
                  tabIndex={-1}
                  onClick={() => onToggle(task._id, 'isCompleted', !task.isCompleted, true)}
                />
              </ListItemIcon>
              <Input
                value={task.text}
                className={classes.input}
                onBlur={() => onUpdate(task._id, { text: task.text, isCompleted: task.isCompleted })}
                onChange={(e) => onEdit(task._id, e.target.value)}
              />
              <ListItemSecondaryAction>
                <Tooltip title="Delete">
                  <IconButton onClick={() => onDelete(task._id)}>
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
        }
      })}
      <Divider />
      {completedTasks.map((completedTask) => {
        return (
          <ListItem>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={completedTask.isCompleted}
                onClick={() => onToggle(completedTask._id, 'isCompleted', !completedTask.isCompleted, true)}
              />
            </ListItemIcon>
            <Input disabled readOnly value={completedTask.text} className={classes.input} />
          </ListItem>
        );
      })}
    </List>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onEdit: PropTypes.func,
  onToggle: PropTypes.func,
};

export default TaskList;
