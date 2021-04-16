import React from 'react';
import PropTypes from 'prop-types';

import { AiOutlineSend } from 'react-icons/ai';
import {
  List,
  IconButton,
  Tooltip,
  Input,
  InputAdornment,
  CircularProgress,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
    padding: '20px',
  },
  iconSendWrapper: {
    position: 'relative',
  },
}));

const InputTask = ({ value, isLoadingAdd, onAdd, onChange }) => {
  const classes = useStyles();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (value) {
        onAdd();
      }
    }
  };

  return (
    <List>
      <Input
        value={value}
        onChange={onChange}
        placeholder="Type here to add new task item.."
        className={classes.input}
        onKeyDown={handleKeyDown}
        endAdornment={
          <InputAdornment position="end">
            <Tooltip title="Send todo">
              <IconButton
                color={value.length < 2 ? undefined : 'primary'}
                disabled={value.length < 2}
                onClick={onAdd}
              >
                <div className={classes.iconSendWrapper}>
                  {!isLoadingAdd && <AiOutlineSend />}
                  {isLoadingAdd && <CircularProgress />}
                </div>
              </IconButton>
            </Tooltip>
          </InputAdornment>
        }
      />
    </List>
  );
};

InputTask.propTypes = {
  value: PropTypes.any,
  isLoadingAdd: PropTypes.bool,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
};

export default InputTask;
