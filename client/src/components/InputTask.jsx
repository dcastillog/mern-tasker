import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { List, IconButton, InputAdornment, Tooltip, CircularProgress, makeStyles, TextField } from '@material-ui/core';
import { useInput } from '../hooks';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
    padding: '20px',
  },
  iconSendWrapper: {
    position: 'relative',
  },
}));

const InputTask = ({ loading, onCreate }) => {
  const classes = useStyles();
  const [value, handleInputChange, reset] = useInput('');

  const handleClick = () => {
      const object = {
          name: value,
          completed: false,
          archived: false,
      }
    onCreate(object).then((_) => reset());
  };

  const handleKeyDown = (e) => (e.key === 'Enter' && value !== '' ? handleClick() : undefined);

  return (
    <List>
      <TextField
        value={value}
        variant="outlined"
        onChange={handleInputChange}
        placeholder="Type here to add new task item.."
        className={classes.input}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="Send todo">
                <IconButton
                  color={value.length > 0 ? 'primary' : undefined}
                  disabled={value.length < 1}
                  onClick={handleClick}
                >
                  <div className={classes.iconSendWrapper}>
                    {!loading && <AiOutlineSend />}
                    {loading && <CircularProgress />}
                  </div>
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </List>
  );
};

export default InputTask;
