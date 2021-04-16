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

const TaskList = ({ tasks = [], onRemove, onUpdate, onEdit, onToggle }) => {
  const classes = useStyles();

  const handleRemoveTask = (id) => {
    onRemove(id);
  };
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <List>
      {tasks.map((task) => {
        if (!task.isCompleted) {
          return (
            <ListItem key={task.id}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.isCompleted}
                  tabIndex={-1}
                  onClick={() => onToggle(task.id, 'isCompleted', !task.isCompleted, true)}
                />
              </ListItemIcon>
              <Input
                value={task.text}
                onBlur={() => onUpdate(task)}
                onChange={(e) => onEdit(task.id, e.target.value)}
                className={classes.input}
              />
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
                onClick={() =>
                  onToggle(completedTask.id, 'isCompleted', !completedTask.isCompleted, true)
                }
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
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  onEdit: PropTypes.func,
  onToggle: PropTypes.func,
};

export default TaskList;
