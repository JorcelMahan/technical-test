import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

export const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        title: todo,
        completed: false,
      })
    );

    setTodo('');
  };

  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id='outlined-basic'
        label='Add Todo'
        variant='outlined'
        size='small'
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <Button
        variant='contained'
        size='large'
        type='submit'
        disabled={todo === ''}
      >
        Add
      </Button>
    </Box>
  );
};
