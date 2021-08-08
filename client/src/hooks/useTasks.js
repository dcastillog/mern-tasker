import { useEffect, useState } from 'react';
import { collatedTasksExist } from '../utils';
import useAuth from "./useAuth";

const testTasks = [
  {
    id: 1,
    name: 'Inbox task',
    createdBy: 1,
    projectId: '1',
    createdAt: '00/00/00/',
    updatedAt: '',
    completed: false,
    archived: false,
    favorite: false,
  },
  {
    id: 1,
    name: 'task1',
    createdBy: 1,
    projectId: '34',
    createdAt: '00/00/00/',
    updatedAt: '',
    completed: false,
    archived: false,
    favorite: false,
  },
  {
    id: 2,
    key: 'Project two',
    name: 'task2',
    completed: false,
    archived: false,
    projectId: '34',
    tagId: '',
    createdBy: 1,
    createdAt: '00/00/00/',
    updatedAt: '',
    favorite: false,
  },
  {
    id: 3,
    key: 'Project two',
    name: 'task3',
    completed: false,
    archived: false,
    tagId: '',
    projectId: '23',
    createdBy: 1,
    createdAt: '00/00/00/',
    updatedAt: '',
    favorite: false,
  },
  {
    id: 3,
    key: 'Project two',
    name: 'task from best team',
    completed: false,
    archived: false,
    tagId: '',
    teamId: '1233',
    createdBy: 1,
    createdAt: '00/00/00/',
    updatedAt: '',
    favorite: false,
  },
];

const useTasks = (selectedFilter) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [currentUser] = useAuth();

  const handleCreateByProject = async (object) => {
    setCreating(!creating);
    let taskToServer = {
      id: Math.floor(Math.random() * (1000 - 2 + 1)) + 2,
      projectId: isNaN(parseInt(selectedFilter)) ? null : parseInt(selectedFilter),
      createdBy: currentUser.id,
      ...object
    };

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000, taskToServer);
      }).then((_) => tasks.unshift(taskToServer));
      setCreating(false);
    } catch (e) {
      console.log(e);
      setCreating(false);
    }
  };

  const handleCreateByTeam  = async (object) => {
    setCreating(!creating)
    let taskToServer = {
      id: Math.floor(Math.random() * (1000 - 2 + 1)) + 2,
      teamId: isNaN(parseInt(selectedFilter)) ? null : parseInt(selectedFilter),
      createdBy: currentUser.id,
      ...object
    };

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000, taskToServer);
      }).then((_) => tasks.unshift(taskToServer));
      setCreating(false);
    } catch (e) {
      console.log(e);
      setCreating(false);
    }
  }

  const handleEdit = (id, name) => {
    console.log(tasks);
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.name = name;
      }
      return task;
    });
    setTasks(editedTasks);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleUpdate = (id, body) => {
    console.log(body);
  };

  const handleToggle = (id, field, value, save = false) => {
    const editedTasks = tasks.map((task) => {
      const toggledTask = task;
      if (toggledTask.id === id) {
        toggledTask[field] = value;
        if (save) handleUpdate(task.id, toggledTask);
      }
      return toggledTask;
    });
    setTasks(editedTasks);
  };

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      await new Promise((resolve) => {
        const filterTasks = testTasks.filter((task) => task.projectId === selectedFilter || task.teamId === selectedFilter);

        setTimeout(resolve, 1000, filterTasks);
      })
        .then((res) => {
          setTasks(res);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }

    fetchTasks();
  }, [selectedFilter]);

  return { tasks, loading, creating, handleCreateByProject, handleCreateByTeam, handleEdit, handleUpdate, handleDelete, handleToggle };
};

export default useTasks;
