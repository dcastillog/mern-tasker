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

  const handleToggle = (id, field, value, save = false) => {
    const tmpTasks = tasks.map((task) => {
      const tmpTask = task;
      if (tmpTask.id === id) {
        tmpTask[field] = value;
      }
      if (save) {
        handleUpdateTask(tmpTask);
      }
      return tmpTask;
    });
    onSetTask(tmpTasks);
  };

  const handleRemoveTask = async (id) => {
    onSetTask(tasks.filter((task) => task.id !== id));
  };

  const handleUpdateTask = async (task) => {
    console.log(task, 'Updated task');
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
