import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserTasks from '../../components/UserTasks';

const TaskContainer = ({ tasks, onAddTask, onSetTask }) => {
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);

  const handleAddTask = async (text) => {
    setIsLoadingAdd(true);
    const taskToServer = {
      author: 'userid',
      isCompleted: false,
      text,
    };
    const taskAdded = await new Promise((resolve) => {
      setTimeout(resolve, 1000, {
        ...taskToServer,
        id: Math.floor(Math.random() * (1000 - 0) + 0),
      });
    });
    onAddTask(taskAdded, text);
    setIsLoadingAdd(false);
  };

  const handleToggle = (checked = false) => {
    console.log(checked, 'sss');
  };

  const handleRemoveTask = async (id) => {
    onSetTask(tasks.filter((task) => task.id !== id));
  };

  const handleUpdateTask = async (task) => {
    console.log('Update Task');
  };

  const handleEditTask = async (id, text) => {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.text = text;
      }
      return task;
    });
    onSetTask(editedTasks);
  };

  return (
    <UserTasks
      tasks={tasks}
      isLoadingAdd={isLoadingAdd}
      onAdd={handleAddTask}
      onEdit={handleEditTask}
      onUpdate={handleUpdateTask}
      onRemove={handleRemoveTask}
      onToggle={handleToggle}
    />
  );
};

TaskContainer.propTypes = {
  tasks: PropTypes.array,
  onAddTask: PropTypes.func,
  onSetTask: PropTypes.func,
};

export default TaskContainer;
