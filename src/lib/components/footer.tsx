import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        padding: '16px',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Typography variant="body2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
    </Box>
  );
};
