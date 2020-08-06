import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

export default function FormTask(){
  return(

    <Container maxWidth="md">
      <form 
        className="new-project-form"
        >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          >
          <TextField 
            placeholder="Nombre proyecto"
            variant="outlined"
            style={{ width: '50ch', paddingRight: '30px' }}
            autofocus
            id="name"
            name="name"
            />
           <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon/>}
            >
              Agregar tarea
            </Button>
        </Grid>
      </form>      
    </Container>
  );
}