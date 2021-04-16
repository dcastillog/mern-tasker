import React from 'react';
import PropTypes from 'prop-types';

const style = {
  root: {
    width: '200px',
    margin: '16px',
    border: '0.5px solid #c5c7d0',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const SeparatorLine = ({ children }) => {
  return (
    <div style={style.flex}>
      <div style={style.root}></div>
      {children}
      {children && <div style={style.root}></div>}
    </div>
  );
};

SeparatorLine.propTypes = {
  children: PropTypes.func,
};

export default SeparatorLine;
