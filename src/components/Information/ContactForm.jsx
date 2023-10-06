import React, { Component } from 'react'
import { Card, CardContent, Grid, Typography, TextField, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey, purple, } from '@mui/material/colors';
import { motion } from "framer-motion"

const theme = createTheme({
  palette: {
   primary: {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff',
            },
 secondary: {
   light: '#ff7961',
   main: '#ffffff',
   dark: '#ba000d',
   contrastText: '#000',
            },
           },
          });

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
                <ThemeProvider theme={theme}>
                <Button type='submit' variant='contained' fullWidth color='secondary'> Submit </Button>
                </ThemeProvider>
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

