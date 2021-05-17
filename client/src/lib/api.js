import axios from './axios';

class Api {
  constructor() {}

  get = async (url) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((response) => {
          if (response) {
            resolve(response.data);
          }
          reject(new Error('Sorry, something went wrong. Please try later'));
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };
  post = async (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((response) => {
          if (response) {
            resolve(response.data);
          }
          reject(new Error('Sorry, something went wrong. Please try later'));
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };
  delete = async (url, config) => {
    return new Promise((resolve, reject) => {
      axios.delete(url, config).then((response) => {
        resolve();
      });
    });
  };
  patch = async (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(url, data)
        .then((response) => {
          if (response) {
            resolve(response.data);
          }
          reject(new Error('Sorry, something went wrong. Please try later'));
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };
  login = async (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/signin', {
          email: email,
          password: password,
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
          reject(error);
        });
    });
  };

  signUp = async (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/signup', data)
        .then((response) => {
          if (response) {
            const { user } = response.data;
            const { tokens } = response.data;
            console.log(response, 'resposne');
            resolve({ user, tokens });
          }
          reject(new Error('Sorry, something went wrong. Please try later'));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  logout = async () => {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/logout')
        .then((_) => {
          resolve();
        })
        .catch((e) => {
          reject();
        });
    });
  };
}

export { Api };
