import React, { useRef, useState, FormProvider } from 'react'
import { Card, CardContent, Grid, Typography, TextField, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

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

//Validate the user's input in the text fields
function Validation(){
    const [name, setName] = useState('') // Store the name of the user in submission form
    const [email, setEmail] = useState('') // Store the email of the user in submission form
    const [message, setMessage] = useState('') // Store the message of the user
    const validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name.length == 0) {
        alert('You need to fill out your name')
        return
      }

    if (email.length == 0) {
        alert('You need to fill out your email')
        return
    }

    if(!email.value.match(validRegex)){
        alert('You need to input a valid email')
        return
    }
    
      if (message.length == 0) {
        alert('Remember to write a message')
        return
      }
      alert('Thank`s for getting in touch!')
}

//Email controller
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgow64q', 'template_jlppomk', form.current, '3VQy3nWoqTslSC393')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

//Contact form
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
                    <TextField name='from_name' placeholder='Please enter your name' variant='standard' onChange={(e) => setName(e.target.value)} fullWidth/>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField name='from_email' placeholder='Please enter your email address' variant='standard' onChange={(e) => setEmail(e.target.value)} fullWidth/>
                </Grid>
                <Grid xs={12} item>
                    <TextField name='message' multiline rows={8} placeholder='Enter your message here' variant='standard' onChange={(e) => setMessage(e.target.value)} fullWidth/>
                </Grid>
                <Grid xs={12} item>
                <ThemeProvider theme={theme}>
                <Button type='submit' variant='contained' value='Send' fullWidth color='secondary'> Submit </Button>
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

