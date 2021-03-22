import { useState } from 'react';

const useAlert = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, category) => {
    setAlert({
      message,
      category,
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return [alert, showAlert];
};

export default useAlert;
