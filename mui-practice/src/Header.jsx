import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import React from 'react';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography>Testing Material UI</Typography>
        <IconButton aria-label='settings' sx={{ marginLeft: 'auto' }}>
          <AccountTreeIcon sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
