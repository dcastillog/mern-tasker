import React, { useContext, useEffect } from 'react';
import { ApiContext } from '../contexts/api';
import { ProjectContext } from '../contexts/project';

export const withProjects = (Component) => (props) => {
  const { userProjects } = useContext(ProjectContext);
  const api = useContext(ApiContext);

  useEffect(async () => {
    const data = await api.get('/projects');
    console.log(data, 'with projects');
  }, [userProjects]);

  return <Component {...props} userProjects={userProjects} />;
};

// export const withAuth = (Component) => (props) => {

//   const saveAuthAndRedirect = (data) => {
//     try {
//       const { user } = data;
//       let { tokens = null } = data;
//       activateAuth(user, tokens);
//       setLoading(false);
//       console.log(user, 'withAuth');
//       history.push('/home');
//     } catch (error) {
//       console.log({ error });
//     }
//   };

//   const onSignInWithEmailAndPassword = async (email, password) => {
//     setLoading(true);
//     await api
//       .login(email, password)
//       .then((response) => {
//         saveAuthAndRedirect(response);
//       })
//       .catch((error) => {
//         const { response } = error;
//         setAlert({ message: response.data.message, severity: 'error', status: true });
//         setLoading(false);
//       });
//   };

//   const onSignUp = async (data) => {
//     setLoading(true);
//     await api
//       .signUp(data)
//       .then((response) => {
//         saveAuthAndRedirect(response);
//       })
//       .catch((error) => {
//         const { response } = error;
//         setAlert({ message: response.data.message, severity: 'error', status: true });
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <Component
//         {...props}
//         loading={loading}
//         alert={alert}
//         onShowAlert={setAlert}
//         onSignInWithEmailAndPassword={onSignInWithEmailAndPassword}
//         onSignUp={onSignUp}
//       />
//     </div>
//   );
// };
// //
