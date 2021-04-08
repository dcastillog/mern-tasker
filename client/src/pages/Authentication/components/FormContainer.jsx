import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const FormContainer = ({ children }) => {
  return (
    <Grid container alignItems="center">
      {children}
    </Grid>
  );
};

FormContainer.propTypes = {
  children: PropTypes.element,
};

export default FormContainer;
