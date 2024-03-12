import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { PetCard } from './PetCard';

export const ListPets = () => {
  const pets = useSelector(state => state.pets.pets);

  return (
    <Grid container spacing={2}>
      {pets.map(pet => (
        <Grid item key={pet.id} xs={12} sm={6} md={4}>
          <PetCard {...pet} />
        </Grid>
      ))}
    </Grid>
  );
};
