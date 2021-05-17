import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

const style = {
  label: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '15px',
    fontWeight: '400',
    fontFamily: 'Roboto, sans-serif',
  },
  labelGrid: {
    padding: '10px',
  },
};

const FormLabel = ({ label }) => {
  return (
    <Grid item xs={5} md={4} style={style.labelGrid}>
      <label style={style.label}>{label}</label>
    </Grid>
  );
};

FormLabel.propTypes = {
  label: PropTypes.string,
};

export default FormLabel;
