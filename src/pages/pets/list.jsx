import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ListPets } from '../../components/ListPets';

export const PetsListPage = () => {
  return (
    <Container>
      <Typography variant='h2' align='center' gutterBottom sx={{ mt: 2 }}>
        Mascotas
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Link to='/pets/create'>Agregar mascota</Link>
      </Box>

      <ListPets />
    </Container>
  );
};
