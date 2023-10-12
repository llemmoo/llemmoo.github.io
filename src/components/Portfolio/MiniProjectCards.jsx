import { Button, Backdrop, Card, CardActionArea, CardContent, CardMedia, CardActions, Typography, Box, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
// Card body text theme
const bodyText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 9,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: '#ffffffb3'
    } 
  },
});
// Card title theme
const titleText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 15,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
const buttonText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 12,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
    palette: {
    primary: {
      main: '#ffffffb3'
    } 
  },
});
// Bachelor Thesis Content Card
function BachelorCard() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='/bachelor1.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: '60vh',
                width: '80vh'
              }}
              src="/bachelor1.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Bachelor's Thesis
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Our thesis concerns the use of eye-tracking in VR-gaming. The purpose was to mimic 
          eye-tracking interactions, without the use of eye-tracking technology. We called this
          vision-based interactions. The project was built with C# and the Unity game engine,
          with the use of a Meta Quest 2.
          </Typography>
          </ThemeProvider>
          <CardActions sx={{paddingBottom:0}}>
            <ThemeProvider theme={buttonText}>
        <Button size="small" color="primary" component={Link} to={`/portfolio/bachelor`} sx={{}}>
          Read More
        </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
// P2P Card
function P2PCard() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 400, minHeight: 380}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='/p2p.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: '80vh',
                width: '60vh'
              }}
              src="/p2p.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          IoT - P2P & Cloud
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Sensor-data driven web application made possible with IoT devices such as Arduino
          and M5Stack. ML algorithm trained to track the user's face and recognize
          the emotions. Web application implemented with python backend and reactJS frontend.
          MUI as CSS framework
          </Typography>
          </ThemeProvider>
          <CardActions sx={{paddingBottom:0}}>
            <ThemeProvider theme={buttonText}>
        <Button size="small" color="primary" component={Link} to={`/portfolio/P2P`} sx={{}}>
          Read More
        </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
// Real-Softwarekonstruktion
function SWEACard() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 400, minHeight: 390}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='/HotCiv.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: '60vh',
                width: '70vh'
              }}
              src="/HotCiv.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Civilization Game
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Civilization style game, built with Java. Project goal was to explore the strengths
          of employing design patterns and refactorization of existing code to make expansion
          easier. Different methodologies employed, in particular, agile and tests-first software design
          meant to ease said expansion.
          </Typography>
          </ThemeProvider>
          <CardActions sx={{paddingBottom:0}}>
            <ThemeProvider theme={buttonText}>
        <Button size="small" color="primary" component={Link} to={`/portfolio/SWEA`} sx={{}}>
          Read More
        </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
// Eksperimentel Systemudvikling
function ExsysCard() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='/exsys.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: '60vh',
                width: '90vh'
              }}
              src="/exsys.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Wiki for Adservice
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          In collaboration with Adservice, we built a tech-wiki to support communication
          between marketing workers and the engineers working on their services. The project
          entailed ethnographic studies, to support the design process, as well as Javascript
          web development to build the web application.
          </Typography>
          </ThemeProvider>
          <CardActions sx={{paddingBottom:0}}>
            <ThemeProvider theme={buttonText}>
        <Button size="small" color="primary" component={Link} to={`/portfolio/exsys`} sx={{}}>
          Read More
        </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
function IOTCard() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 390}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='/iot.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: '60vh',
                width: '60vh'
              }}
              src="/iot.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Web of Things
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          4 web applications covering fullstack web development with Python and Javascript.
          The applications were centered around the use of Python and Javascript for building
          web applications, including WoT devices such as the M5Stack. The
          M5Stack was programmed with MicroPython.
          </Typography>
          </ThemeProvider>
          <CardActions sx={{paddingBottom:0}}>
            <ThemeProvider theme={buttonText}>
        <Button size="small" color="primary" component={Link} to={`/portfolio/iot`} sx={{}}>
          Read More
        </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
export {BachelorCard, P2PCard, IOTCard, SWEACard, ExsysCard}