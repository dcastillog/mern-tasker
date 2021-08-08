import { useEffect, useState } from 'react';

const tmpTeams = [
  {
    id: '1233',
    name: 'Best team',
    owner: 1,
    createdAt: '00/00/00/',
    updatedAt: '00/00/00/',
  },
  {
    id: '4323',
    name: 'University team',
    owner: 1,
    createdAt: '00/00/00/',
    updatedAt: '00/00/00/',
  },
];

const useTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(resolve, 2000, tmpTeams);
    })
      .then((res) => setTeams(res))
      .catch((e) => console.log(e));
  }, [teams]);

  return { teams, setTeams };
};

export default useTeams;
