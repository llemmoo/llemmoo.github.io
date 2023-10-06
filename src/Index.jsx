import { Box, Button, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SourceIcon from '@mui/icons-material/Source';
import { motion } from "framer-motion";
import './styles/index.css';

const bigText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 50,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700 
  },
});
const smallText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 20,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700 
  },
});
const buttonText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 15,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700 
  },
});


export default class Index extends Component {
  render() {
    return (
      <>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1,  transition: { duration: 0.7}}}
        exit={{ opacity: 0, transition: { duration: 0.7} }}
      >
      <Grid container sx={{ alignContent: 'center', justifyContent: 'center', minHeight: '100vh'}}>
        <Box sx={{textAlign: 'center', alignContent: 'center', justifyContent: 'center'}}>
          <ThemeProvider theme={bigText}>
        <Typography size='h1' sx={{userSelect: 'none'}}>
          Oliver Lemonakis
        </Typography>
        </ThemeProvider>
        <ThemeProvider theme={smallText}>
        <Typography sx={{userSelect: 'none'}}>
          Junior Developer
        </Typography>
        </ThemeProvider>
        <ThemeProvider theme={buttonText}>
        <Button  component={Link} to={`/portfolio`} size='large' endIcon={<SourceIcon fontSize='small'/>} sx={{ color: '#ffffff', m:4 }}>
          My Work
        </Button>
        </ThemeProvider>
        </Box>
        </Grid>
      </motion.div>
      </>
    )
  }
}
