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
      main: 'rgba(255, 255, 255, 0.7)'
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
      main: 'rgba(255, 255, 255, 0.7)'
    } 
  },
});
// Bachelor Thesis Content Card
function bigBachelor() {
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
          image='./src/assets/projects/bachelor/bachelor1.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: 576,
                width: 1024
              }}
              src="./src/assets/projects/bachelor/bachelor1.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent sx={{}}>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Bachelor Thesis
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
          </Typography>
          </ThemeProvider>
          <CardActions>
            <ThemeProvider theme={buttonText}>
        <Button size="small" color="primary" component='object'>
          Read More
        </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
// P2P Card
function bigP2P() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 300, margin:15, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='./src/assets/projects/bachelor/bachelor1.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: 576,
                width: 1024
              }}
              src="./src/assets/projects/bachelor/bachelor1.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Bachelor Thesis
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
          </Typography>
          </ThemeProvider>
        </CardContent>
      </Card>
    )
}
// Real-Softwarekonstruktion
function bigSWEA() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 300, margin:15, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='./src/assets/projects/bachelor/bachelor1.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: 576,
                width: 1024
              }}
              src="./src/assets/projects/bachelor/bachelor1.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Bachelor Thesis
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
          </Typography>
          </ThemeProvider>
        </CardContent>
      </Card>
    )
}
// Eksperimentel Systemudvikling
function bigExsys() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 300, margin:15, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='./src/assets/projects/bachelor/bachelor1.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: 576,
                width: 1024
              }}
              src="./src/assets/projects/bachelor/bachelor1.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Bachelor Thesis
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
          </Typography>
          </ThemeProvider>
        </CardContent>
      </Card>
    )
}
function bigIOT() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: 300, margin:15, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='./src/assets/projects/bachelor/bachelor1.jpg'
          alt="moving mannequins"
          />
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}>
            <Box component="img"
              sx={{
                height: 576,
                width: 1024
              }}
              src="./src/assets/projects/bachelor/bachelor1.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Bachelor Thesis
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary'>
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
          </Typography>
          </ThemeProvider>
        </CardContent>
      </Card>
    )
}
export {bigBachelor, bigP2P, bigIOT, bigSWEA, bigExsys}