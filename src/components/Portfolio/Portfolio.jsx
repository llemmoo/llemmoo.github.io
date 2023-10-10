import React, { Component } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { EmailIcon } from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BachelorCard } from './MiniProjectCards'
import { motion } from "framer-motion";
import ContactForm from '../Forms/ContactForm';
import {BigBachelor, BigP2P, BigIOT, BigSWEA, BigExsys} from './BigProjectCards';
import '../../styles/Index.css';

function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}
export const Item = () => {
  let history = useHistory();
  return (
      <>
        <button onClick={() => history.goBack()}>Back</button>
      </>
  );
};

const bigText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 60,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700 
  },
});

const BigCardText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 50,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700 
  },
});
// Entire portfolio page with minimized cards
const PortfolioLayout = () => {
    return (
      <>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: { duration: 0.7} }}
        exit={{ opacity: 0, transition: { duration: 0.7} }}
      >
      <Grid container direction='row' sx={{  paddingTop: '3vh', paddingLeft: '5vh', userSelect: 'none', textAlign: 'center', alignItems: 'center' }}>
      <ThemeProvider theme={bigText}>
      <Typography> Portfolio </Typography> 
      </ThemeProvider>
      <IconButton onClick={handleScroll} size='large' sx={{color: '#ffffff', maxHeight: 50, marginLeft: '120vh'}}><EmailIcon/></IconButton>
      </Grid>
      <Grid container
      direction="row"
      alignItems="center"
      justifyContent="center"
      minHeight='65vh'>
        <BachelorCard/>
        <BachelorCard/>
        <BachelorCard/>
        <BachelorCard/>
        <BachelorCard/>
        </Grid>
        <Grid container alignContent='center' justifyContent='center'>
        <Box borderRadius='20px' sx={{ width: '100vh', height: 6, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center'}}/>
        </Grid>
        <Grid item paddingTop='225px' paddingBottom='125px'>
          <ContactForm/>
        </Grid>
        </motion.div>
      </>
    )
};

const RenderSwitch = ({ slug, ...props}) => {
switch (slug) {
  case 'bachelor':
      return <BigBachelor {... props}/>;
  
  case 'bigIOT': 
      return <BigIOT {... props}/>;
    
  case 'bigBachelor':
      return <BigBachelor {... props}/>;
  
  case 'bigIOT': 
      return <BigIOT {... props}/>;

  case 'bigIOT': 
      return <BigIOT {... props}/>;

  default:
    return null;
}
};


//Layout for maximized individual cards
const IndividualLayout = () => {
  const Path = useLocation();
  return (
    <>
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: { duration: 0.7} }}
      exit={{ opacity: 0, transition: { duration: 0.7} }}
    >
    <Grid container direction='row' sx={{  paddingTop: '3vh', paddingLeft: '5vh', userSelect: 'none', textAlign: 'center', alignItems: 'center' }}>
    <ThemeProvider theme={BigCardText}>
    <Typography> Portfolio </Typography> 
    </ThemeProvider>
    <IconButton>
      <ArrowBackIcon/>
    </IconButton>
    </Grid>
    <Grid container
    direction="row"
    alignItems="center"
    justifyContent="center">
      <RenderSwitch slug={Path.pathname.split("/")[2]}/>
      </Grid>
      </motion.div>
    </>
  )
};

export { PortfolioLayout, IndividualLayout };
