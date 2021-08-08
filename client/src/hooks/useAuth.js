import { useState } from 'react';

const useInput = (initialValue) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({id: 1, name: 'current user'});

  const handleSignInWithEmailAndPassword = () => {};
  const handleSignInWithGoogle = () => {};
  const handleSignInWithGitHub = () => {};
  const handleRegister = () => {};

  return [currentUser];
};

export default useInput;
