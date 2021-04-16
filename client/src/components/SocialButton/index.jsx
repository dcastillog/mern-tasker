import React from 'react';
import PropTypes from 'prop-types';

import { FcGoogle, FaGithub } from 'react-icons/all';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  socialButton: {
    fontSize: '16px',
    fontWeight: '200',
    borderRadius: '20px',
    textTransform: 'none',
    margin: '5px',
  },
  socialIcon: {
    width: '22px',
    height: '22px',
    marginRight: '16px',
  },
}));

const SocialButton = ({ socialMedia, title }) => {
  const classes = useStyles();

  const renderIcon = () => {
    if (socialMedia === 'google') {
      return <FcGoogle className={classes.socialIcon} />;
    } else if (socialMedia === 'github') {
      return <FaGithub className={classes.socialIcon} />;
    }
  };

  return (
    <Button variant="outlined" color="white" className={classes.socialButton}>
      {renderIcon()}
      {title}
    </Button>
  );
};

SocialButton.protoTypes = {
  title: PropTypes.string,
  socialMedia: PropTypes.oneOf(['google', 'gitghub']),
};

export default SocialButton;
