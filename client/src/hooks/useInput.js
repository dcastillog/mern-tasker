import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue !== undefined ? initialValue : null);

  const handleInputChange = (val) => {
    if (val.target !== null) {
      setValue(val.target.value);
    } else {
      setValue(val);
    }
  };

  const reset = () => {
    console.log('reset');
    setValue('');
  };

  return [value, handleInputChange, reset];
};

export default useInput;
