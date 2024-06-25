import React, { Component } from 'react';
import portfolioPdf from '../../../public/assets/Portfolio.pdf';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, IconButton, ButtonGroup, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BachelorCard, ExsysCard, IOTCard, P2PCard, SWEACard } from './MiniProjectCards'
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
    fontSize: 60,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700 
  },
});

const ButtonRoboto = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 13,
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
      <Grid container direction='row' justifyContent="space-between" sx={{  paddingTop: '3vh', paddingLeft: '5vh', userSelect: 'none', textAlign: 'center', alignItems: 'space-between' }}>
      <ThemeProvider theme={bigText}>
      <Typography> Portfolio </Typography> 
      </ThemeProvider>
      <ThemeProvider theme={ButtonRoboto}>
      <ButtonGroup sx={{marginRight: '3%'}} >
        <Button target='_blank' variant='text' href={portfolioPdf} endIcon={<PictureAsPdfIcon/>} sx={{color: '#ffffff', maxHeight: 50}}>
        <Typography>PDF PORTFOLIO</Typography>
        </Button>
        <IconButton onClick={handleScroll} size='large' sx={{color: '#ffffff', maxHeight: 50 }}><EmailIcon/></IconButton>
      </ButtonGroup>
      </ThemeProvider>
      </Grid>
      <Grid container
      direction="row"
      alignItems="center"
      justifyContent="center"
      minHeight='65vh'>
        <BachelorCard/>
        <SWEACard/>
        <ExsysCard/>
        <P2PCard/>
        <IOTCard/>
        </Grid>
        <Grid container alignContent='center' justifyContent='center'>
        <Box borderRadius='20px' sx={{ width: '100vh', height: 6, backgroundColor: '#ffffffb3', justifyContent: 'center', alignSelf: 'center'}}/>
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
  
  case 'P2P': 
      return <BigP2P {... props}/>;
    
  case 'SWEA':
      return <BigSWEA {... props}/>;
  
  case 'exsys': 
      return <BigExsys {... props}/>;

  case 'iot': 
      return <BigIOT {... props}/>;

  default:
    return null;
}
};


//Layout for maximized individual cards
const IndividualLayout = () => {
  const Path = useLocation();
  let navigate = useNavigate();
  return (
    <>
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: { duration: 0.7} }}
      exit={{ opacity: 0, transition: { duration: 0.7} }}
    >
    <Grid container direction='row' sx={{  paddingTop: '3vh', paddingLeft: '5vh', userSelect: 'none'}}>
    <ThemeProvider theme={BigCardText}>
    <Typography> Portfolio </Typography> 
    </ThemeProvider>
    </Grid>
    <Grid container
    direction="column"
    alignItems="center"
    justifyContent="center">
      <RenderSwitch slug={Path.pathname.split("/")[2]}/>
      <IconButton  size='large' onClick={() => navigate(-1)} sx={{margin: '5px'}}>
      <ArrowBackIcon/>
    </IconButton>
      </Grid>
      </motion.div>
    </>
  )
};

export { PortfolioLayout, IndividualLayout };
