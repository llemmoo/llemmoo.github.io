import React, { Component } from 'react'
import { Button, Box, Grid, Typography } from '@mui/material';
import { BachelorCard } from './ProjectCards'
import { motion } from "framer-motion"
import ContactForm from '../Information/ContactForm';

function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}


export default class Projects extends Component {
  render() {
    return (
      <>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: { duration: 0.7} }}
        exit={{ opacity: 0, transition: { duration: 0.7} }}
      >
      <Grid container direction='row' sx={{  paddingTop: '3vh', paddingLeft: '5vh', userSelect: 'none', textAlign: 'center', alignItems: 'center' }}>
      <Typography variant='h1'> Portfolio </Typography> 
      <Button onClick={handleScroll} size='large' variant='outlined' sx={{color: '#ffffff', maxHeight: 50, marginLeft: '120vh'}}>Contact Me</Button>
      </Grid>
      <Grid container
      direction="row"
      alignItems="center"
      justifyContent="center"
      minHeight='70vh'>
        <BachelorCard/>
        <BachelorCard/>
        <BachelorCard/>
        <BachelorCard/>
        </Grid>
        <Grid container alignContent='center' justifyContent='center'>
        <Box borderRadius='20px' sx={{ width: '100vh', height: 6, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center'}}/>
        </Grid>
        <Grid item paddingTop='155px' paddingBottom='50px'>
          <ContactForm/>
        </Grid>
        </motion.div>
      </>
    )
  }
}
