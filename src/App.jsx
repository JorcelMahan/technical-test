import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Typography
        variant='h2'
        align='center'
        gutterBottom
        sx={{
          mt: 2,
        }}
      >
        Mascotas
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
          gap: 2,
        }}
      >
        <Box>
          <Link to='/pets/create'>Agregar mascota</Link>
        </Box>
        <Box>
          <Link to='/pets/list'>Listar mascotas</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
