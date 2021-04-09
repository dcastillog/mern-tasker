import axios from './axios';

class Api {
  constructor() {}

  get = async (endpoint) => {
    return await axios.get(endpoint);
  };
  login = async () => {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/signin', {
          email: 'test1@email.com',
          password: 'test1234#tasker',
        })
        .then((response) => {
          if (response) {
            const { user } = response.data;
            const { tokens } = response.data;
            resolve({ user, tokens });
          }
          reject(new Error('Sorry, something went wrong. Please try later'));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
}

export { Api };
