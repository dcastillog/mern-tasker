import { useContext, useState } from 'react';
import { useAuthValue } from '../contexts/auth';

export const withAuth = (Component) => (props) => {
  const [loading, setLoading] = useState(false);
  const { signInWithEmailAndPassword, signInWithGoogle, signInWithGithub, register } = useAuthValue();

  return (
    <Component
      {...props}
      loading={loading}
      onSignInWithEmailAndPassword={signInWithEmailAndPassword}
      onSignInWithGoogle={signInWithGoogle}
      onSignInWithGithub={signInWithGithub}
      onRegister={register}
    />
  );
};
