import React, { useState } from 'react';

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
  makeStyles, Dialog, DialogTitle, DialogContent, DialogActions, ListItemText, Button
} from '@material-ui/core';
import { HiOutlineTrash, MdAssignmentInd } from 'react-icons/all';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
    marginRight: '80px',
  },
}));

const TaskList = ({ tasks, loading, onUpdate, onEdit, onDelete, onToggle }) => {
  const classes = useStyles();
  const [assignDialog, setAssignDialog] = useState(false);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <List>
          {tasks.map((task) => {
            if (!task.completed) {
              return (
                <ListItem key={task.id}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={task.completed}
                      tabIndex={-1}
                      onClick={() => onToggle(task.id, 'completed', !task.completed, true)}
                    />
                  </ListItemIcon>
                  <Input
                    value={task.name}
                    className={classes.input}
                    onBlur={() => onUpdate(task.id, task)}
                    onChange={(e) => onEdit(task.id, e.target.value)}
                  />
                  <ListItemSecondaryAction>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => onDelete(task.id)}>
                        <HiOutlineTrash />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Assign To">
                      <IconButton onClick={() => setAssignDialog(!assignDialog)}>
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
                    checked={completedTask.completed}
                    onClick={() => onToggle(completedTask.id, 'completed', !completedTask.completed, true)}
                  />
                </ListItemIcon>
                <Input disabled readOnly value={completedTask.name} className={classes.input} />
              </ListItem>
            );
          })}
        </List>
      )}

      <Dialog open={assignDialog} onClose={() => setAssignDialog(!assignDialog)}>
        <DialogTitle>Asignar tarea a un miembro del equipo</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <ListItemText>Juanito Perez</ListItemText>
              <ListItemSecondaryAction>
                <Button>Asignar</Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskList;
