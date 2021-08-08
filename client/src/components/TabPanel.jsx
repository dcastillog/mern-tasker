import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

const TabPanel = (props) => {
  const { children, value, index, ...rest } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tabpanel-${index}`} {...rest}>
      {value === index && <Box mt={2}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
