import React from 'react';
import PropTypes from 'prop-types';
import { useTasks } from '../hooks';
import { useSelectedFilterValue } from '../contexts';
import { InputTask, TaskList } from '../components';

const TaskContainer = (props) => {
  const { selectedFilter } = useSelectedFilterValue();
  const { tasks, loading, creating, handleCreateByProject, handleEdit, handleUpdate, handleDelete, handleToggle } =
    useTasks(selectedFilter);

  return (
    <div>
      <InputTask loading={creating} onCreate={handleCreateByProject} />
      <TaskList
        tasks={tasks}
        loading={loading}
        onUpdate={handleUpdate}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
};

TaskContainer.propTypes = {
  tasks: PropTypes.array,
};

export default TaskContainer;
