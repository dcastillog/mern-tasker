import { useEffect, useState } from 'react';

const tmpProjects = [
  {
    id: '34',
    key: '',
    name: 'Great project',
    archived: false,
    favorite: false,
    createdBy: 1,
    createdAt: '00/00/00/',
    updatedAt: '00/00/00/',
  },
  {
    id: '23',
    key: '',
    name: 'Awesome jobs',
    archived: false,
    favorite: false,
    createdBy: 1,
    createdAt: '00/00/00/',
    updatedAt: '00/00/00/',
  },
];

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [creating, setCreating] = useState(false);

  const handleCreate = async (name, favorite)  => {
    setCreating(!creating)
    const projectToServer = {
      id: Math.floor(Math.random() * (1000 - 2 + 1)) + 2,
      key: '',
      name,
      favorite,
      archived: false,
      createdBy: 1,
    }
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000, projectToServer);
      }).then((_) => projects.unshift(projectToServer));
      setCreating(false);
    } catch (e) {
      console.log(e);
      setCreating(false);
    }
  }

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(resolve, 2000, tmpProjects);
    })
      .then((res) => setProjects(res))
      .catch((e) => console.log(e));
  }, [projects]);

  return { projects, creating, handleCreate };
};

export default useProjects;
