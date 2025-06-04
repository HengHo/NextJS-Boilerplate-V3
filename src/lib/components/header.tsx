import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/about">
            About Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
