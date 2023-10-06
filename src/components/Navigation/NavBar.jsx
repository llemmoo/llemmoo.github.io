import { AppBar, Box, Toolbar, Button } from '@mui/material'
import * as React from 'react';
import { Link } from 'react-router-dom';

import { IconButton, DashboardIcon } from '@mui/icons-material/';

const navItems = ['about', 'portfolio', 'contact'];

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', paddingTop: 2}}>
      <AppBar position="relative" sx={{ maxHeight: 50, maxWidth: 1200, justifyContent: 'center', alignItems: 'center', borderRadius: 3, margin: 'auto'}}>
        <Toolbar>
        <IconButton 
            component={Link} to={'/'}
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2}}>
        <DashboardIcon/>
        </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block', margin:"auto"} }}>
            {navItems.map((item) => (
              <Button variant="outlined" disableElevation component={Link} to={`/${item}`} key={item} sx={{ color: '#ffffff', m:0.5 }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}