import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserTasks from '../../components/UserTasks';

const TaskContainer = ({ tasks, api, user, onAddTask, onDeleteTask, onSetTask }) => {
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);

  const handleAddTask = async (text) => {
    setIsLoadingAdd(true);
    const taskToServer = {
      text,
      isCompleted: false,
      createdBy: user.id,
    };
    try {
      const data = await api.post('/tasks', taskToServer);
      onAddTask(data);
      setIsLoadingAdd(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleToggle = (id, field, value, save = false) => {
    const tmpTasks = tasks.map((task) => {
      const tmpTask = task;
      if (tmpTask._id === id) {
        tmpTask[field] = value;
        if (save) {
          handleUpdateTask(id, { isCompleted: tmpTask.isCompleted, text: tmpTask.text });
        }
      }

      return tmpTask;
    });
    onSetTask(tmpTasks);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      onDeleteTask(taskId);
      await api.delete('/tasks/' + taskId);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateTask = async (taskId, updateBody) => {
    try {
      await api.patch('/tasks/' + taskId, updateBody);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditTask = async (id, text) => {
    const editedTasks = tasks.map((task) => {
      if (task._id === id) {
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
      onDelete={handleDeleteTask}
      onToggle={handleToggle}
    />
  );
};

TaskContainer.propTypes = {
  tasks: PropTypes.array,
  api: PropTypes.any,
  user: PropTypes.any,
  onAddTask: PropTypes.func,
  onSetTask: PropTypes.func,
};

export default TaskContainer;
