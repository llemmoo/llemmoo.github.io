import React, { useRef } from 'react'
import { Card, CardContent, Grid, Typography, TextField, Button, Alert} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import UserSchema from './UserValidation';

//Theme and palette
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
   main: '#ffffffb3',
   dark: '#90caf9',
   contrastText: '#000',
           }
           },
          });


//Form controller
function ContactForm() {
  const form = useRef();
  //Email Controller
 const sendEmail = async (e) => {
    e.preventDefault()
    let FormData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value
    }
    const isValid = await UserSchema.isValid(FormData);
    if (isValid){
    emailjs.sendForm('service_vgow64q', 'template_jlppomk', form.current, '3VQy3nWoqTslSC393')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return
  }

//Contact form itself
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
        <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                    <TextField name='from_name' placeholder='Please enter your name' variant='standard' fullWidth/>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField name='from_email' placeholder='Please enter your email address' variant='standard' type={'email'} fullWidth/>
                </Grid>
                <Grid xs={12} item>
                    <TextField name='message' multiline rows={8} placeholder='Enter your message here' variant='standard' fullWidth/>
                </Grid>
                <Grid xs={12} item>
                <ThemeProvider theme={theme}>
                <Button type={'submit'} variant='contained' value='Send' fullWidth color='secondary'> Submit </Button>
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

export default ContactForm;

