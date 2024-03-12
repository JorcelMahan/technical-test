import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NewPetForm } from '../../components/NewPetForm';

export const CreatePetPage = () => {
  return (
    <Container>
      <Typography variant='h2' align='center' gutterBottom sx={{ mt: 2 }}>
        Agregar mascota
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Link to='/pets/list'>Volver</Link>
      </Box>
      <NewPetForm />
    </Container>
  );
};
