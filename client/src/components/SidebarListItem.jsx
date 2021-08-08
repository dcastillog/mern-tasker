
import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from '@material-ui/core';

const SidebarListItem = ({ text, icon, onClick }) => {
  return (
    <ListItem button key="Today" style={{ padding: '2px 0' }} onClick={onClick}>
      <div style={{ margin: '0 10px ' }}>{icon}</div>
      <ListItemText primary={text} />
    </ListItem>
  );
};

SidebarListItem.propTypes = {
  text: PropTypes.string,
};

export default SidebarListItem;
