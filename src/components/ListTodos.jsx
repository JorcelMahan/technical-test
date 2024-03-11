import { Delete, Edit, Save } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completedTodo, editTodo, removeTodo } from '../features/todoSlice';

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const dispatch = useDispatch();

  const toggleCompleted = id => {
    dispatch(completedTodo(id));
  };

  const deleteTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <Box
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          <IconButton
            edge='end'
            aria-label='edit'
            color='primary'
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <Save /> : <Edit />}
          </IconButton>
          <IconButton
            edge='end'
            aria-label='delete'
            color='secondary'
            onClick={() => deleteTodo(todo.id)}
          >
            <Delete />
          </IconButton>
        </Box>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onClick={() => toggleCompleted(todo.id)}
          />
        </ListItemIcon>
        {isEditing ? (
          <TextField
            id='outlined-basic'
            variant='outlined'
            size='small'
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            onBlur={() => {
              dispatch(editTodo({ id: todo.id, title: newTitle }));
              setIsEditing(!isEditing);
            }}
          />
        ) : (
          <ListItemText
            primary={todo.title}
            sx={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export const ListTodos = () => {
  const todos = useSelector(state => state.todos);

  return (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  );
};
