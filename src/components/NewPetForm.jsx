import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { addPet } from '../features/pets/petsSlice';

const TYPE = ['perro', 'gato', 'conejo', 'tortuga', 'serpiente', 'otro'];
const GENRE = ['M', 'F'];

export const NewPetForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      genre: '',
      image: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      type: Yup.string().required('Required'),
      genre: Yup.string().required('Required'),
      image: Yup.string().url('Invalid URL'),
    }),
    onSubmit: values => {
      dispatch(
        addPet({
          id: crypto.randomUUID(),
          ...values,
          image: values.image || 'https://via.placeholder.com/150',
        })
      );
      formik.resetForm();
      navigate('/pets/list');
    },
  });

  return (
    <Card
      sx={{
        mb: 4,
      }}
    >
      <CardHeader title='Agregar mascota' />
      <CardContent>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            label='Nombre'
            value={formik.values.name}
            onChange={formik.handleChange}
            name='name'
          />
          {formik.touched.name && formik.errors.name && (
            <Typography
              variant='caption'
              sx={{
                color: 'red',
              }}
            >
              {formik.errors.name}
            </Typography>
          )}
          <FormControl>
            <InputLabel>Tipo</InputLabel>
            <Select
              value={formik.values.type}
              onChange={formik.handleChange}
              name='type'
            >
              {TYPE.map(type => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <RadioGroup
            row
            value={formik.values.genre}
            onChange={formik.handleChange}
            name='genre'
          >
            {GENRE.map(genre => (
              <FormControlLabel
                key={genre}
                value={genre}
                control={<Radio />}
                label={genre}
              />
            ))}
          </RadioGroup>
          <TextField
            label='URL: Imagen'
            value={formik.values.image}
            onChange={formik.handleChange}
            name='image'
          />

          <Button
            variant='contained'
            type='submit'
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Agregar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
