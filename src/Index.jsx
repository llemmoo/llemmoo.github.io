import React, { Component } from 'react'
import { motion } from "framer-motion"
import { Box, Button, Grid, Typography } from '@mui/material'
import SourceIcon from '@mui/icons-material/Source';
import { Link } from 'react-router-dom';
import './styles/index.css'

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
        <Typography variant='h2' sx={{userSelect: 'none'}}>
          Oliver Lemonakis
        </Typography>
        <Typography variant='h5' sx={{userSelect: 'none'}}>
          Junior Developer
        </Typography>
        <Button  component={Link} to={`/portfolio`} size='large' endIcon={<SourceIcon fontSize='small'/>} sx={{ color: '#ffffff', m:4 }}>
          My Work
        </Button>
        </Box>
        </Grid>
      </motion.div>
      </>
    )
  }
}
