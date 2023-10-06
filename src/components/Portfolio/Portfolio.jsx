import React, { Component } from 'react'
import { BachelorCard } from './ProjectCards'
import { Button, Box, Card, CardContent, Grid, Typography } from '@mui/material';
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
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Grid container direction='row' sx={{  paddingTop: '3vh', paddingLeft: '5vh', userSelect: 'none', textAlign: 'center', alignItems: 'center' }}>
      <Typography variant='h1'> Portfolio </Typography> 
      <Button onClick={handleScroll} sx={{color: '#ffffff', maxHeight: 50, marginLeft: '120vh'}}>Contact Me</Button>
      </Grid>
      <Grid container
      direction="row"
      alignItems="center"
      justifyContent="center"
      minHeight='85vh'>
        <BachelorCard/>
        <BachelorCard/>
        <BachelorCard/>
        <BachelorCard/>
        </Grid>
        <Grid container alignContent='center' justifyContent='center'>
        <Box borderRadius='20px' sx={{ width: '100vh', height: 2, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center'}}/>
        </Grid>
        <Grid item padding='50px'>
          <ContactForm/>
        </Grid>
        </motion.div>
      </>
    )
  }
}
