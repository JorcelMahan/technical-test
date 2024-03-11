import { Container, Typography } from '@mui/material';
import { AddTodo } from './components/AddTodo';
import { ListTodos } from './components/ListTodos';

function App() {
  return (
    <Container>
      <Typography variant='h2' align='center' color='primary'>
        Todo
      </Typography>
      <AddTodo />
      <ListTodos />
    </Container>
  );
}

export default App;
