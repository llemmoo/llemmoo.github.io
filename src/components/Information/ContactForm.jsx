import React, { Component } from 'react'
import { Card, CardContent, Grid, Typography, TextField, Button} from '@mui/material';
import { motion } from "framer-motion"


export default class ContactForm extends Component {
  render() {
    return (
      <>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Card style={{ maxWidth: 600, margin: '0 auto', padding: '2px 0px', marginTop: 15}}>
        <CardContent>
        <Typography variant='h5' paddingBottom={1.5}>
        Be in touch!
        </Typography> 
        <form>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                    <TextField label='Name' placeholder='Please enter your name' variant='outlined' fullWidth/>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField label='Email' placeholder='Please enter your email address' variant='outlined' fullWidth/>
                </Grid>
                <Grid xs={12} item>
                    <TextField label='Message' multiline rows={8} placeholder='Enter your message here' variant='outlined' fullWidth/>
                </Grid>
                <Grid xs={12} item>
                <Button type='submit' variant='contained' fullWidth color='error'> Submit </Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
      </Card>
      </motion.div>
      </>
    )
  }
}
