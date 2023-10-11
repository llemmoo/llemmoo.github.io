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
          image='../src/assets/projects/bachelor/bachelor1.jpg'
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
              src="../src/assets/projects/bachelor/bachelor1.jpg"/>
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
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
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
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='../src/assets/projects/p2p/p2p.jpg'
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
              src="../src/assets/projects/p2p/p2p.jpg"/>
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
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
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
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='../src/assets/projects/SWEA/HotCiv.jpg'
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
              src="../src/assets/projects/SWEA/HotCiv.jpg"/>
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
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
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
          image='../src/assets/projects/exsys/exsys.jpg'
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
              src="../src/assets/projects/exsys/exsys.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Tech-wiki
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
      <Card style={{ maxWidth: 294, margin:5, maxHeight: 400}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='150'
          image='../src/assets/projects/IOT/iot.jpg'
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
              src="../src/assets/projects/IOT/iot.jpg"/>
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
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
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