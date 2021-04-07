import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@material-ui/core';
import { useInput } from '../../hooks';

import InputTask from '../InputTask';
import TaskList from '../TaskList';
import EmptyTasks from '../EmptyTasks';

const UserTasks = ({
  tasks,
  isLoadingAdd,
  onAdd,
  onRemove,
  onEdit,
  onUpdate,
  onToggle,
}) => {
  const [newTask, handleInputChange, reset] = useInput('');

  const handleAddTask = () => {
    reset();
    console.log(newTask, 'UserTasks');
    onAdd(newTask);
  };

  const renderInputTask = () => (
    <InputTask
      value={newTask}
      isLoadingAdd={isLoadingAdd}
      onChange={handleInputChange}
      onAdd={handleAddTask}
    />
  );
  const renderEmptyTasks = () => <EmptyTasks />;
  const renderTaskList = () => (
    <TaskList
      tasks={tasks}
      onRemove={(id) => onRemove(id)}
      onToggle={onToggle}
    />
  );

  return (
    <Card style={{ width: '100%', padding: '0' }}>
      {renderInputTask()}
      {tasks && tasks.length < 1 ? renderEmptyTasks() : renderTaskList()}
    </Card>
  );
};

UserTasks.propTypes = {
  tasks: PropTypes.array,
  isLoadingAdd: PropTypes.bool,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default UserTasks;
