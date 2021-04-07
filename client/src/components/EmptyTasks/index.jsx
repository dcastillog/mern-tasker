import React from 'react';
import { Container, Grid } from '@material-ui/core';

const EmptyTasks = (props) => {
  return (
    <Container maxWidth="md">
      <Grid container alignItems="center" justify="center">
        <img
          color="primary"
          width="50%"
          src="/empty-task.svg"
          alt="Empty task"
        />
        <h1>You don´t have tasks</h1>
        <p>
          Here you will be able to see the tasks you create and the ones
          assigned to you
        </p>
      </Grid>
    </Container>
  );
};

export default EmptyTasks;
