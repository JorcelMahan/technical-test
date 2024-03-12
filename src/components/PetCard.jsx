import { Box, Card, CardHeader, CardMedia, Modal } from '@mui/material';
import { useState } from 'react';

export const PetCard = ({ name, image }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Card onClick={handleOpen}>
        <CardHeader title={name} />
        <CardMedia component='img' src={image} alt={name} />
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Card>
            <CardHeader title={name} />
            <CardMedia component='img' src={image} alt={name} />
          </Card>
        </Box>
      </Modal>
    </Box>
  );
};
