import React from 'react';
import PropTypes from 'prop-types';

import { Grid, TextField } from '@material-ui/core';

const style = {
  grid: {
    padding: '10px 20px',
  },
};

const FormTextField = ({ value, name, focused = false, error = false, helperText, onChange, onKeyDown }) => {
  return (
    <Grid item md={9} style={style.grid}>
      <TextField
        error={error}
        helperText={helperText}
        variant="outlined"
        fullWidth
        focused={focused}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </Grid>
  );
};

FormTextField.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default FormTextField;
