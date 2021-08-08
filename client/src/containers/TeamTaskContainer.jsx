import React from 'react';
import PropTypes from 'prop-types';
import { useTasks } from '../hooks';
import { useSelectedFilterValue } from '../contexts';
import { InputTask, TaskList } from '../components';

const TeamTaskContainer = (props) => {
  const { selectedFilter } = useSelectedFilterValue();
  const { tasks, loading, creating, handleCreateByTeam, handleEdit, handleUpdate, handleDelete, handleToggle } =
    useTasks(selectedFilter);

  return (
    <div>
      <InputTask loading={creating} onCreate={handleCreateByTeam} />
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

TeamTaskContainer.propTypes = {
  tasks: PropTypes.array,
};

export default TeamTaskContainer;
