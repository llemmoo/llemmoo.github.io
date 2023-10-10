import { Button, Backdrop, Card, CardActionArea, CardContent, CardMedia, CardActions, Typography, Box, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WebAsset } from '@mui/icons-material';
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
function BigBachelor() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
      <Card style={{ maxWidth: '90vh', maxHeight: '90vh'}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='300'
          image='../src/assets/projects/bachelor/bachelor1.jpg'
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
          <CardActions>
        <ThemeProvider theme={buttonText}>
          <Button target='_blank' href='' startIcon={<GitHubIcon/>}>
            Github Link
          </Button>
          <Button target='_blank' href='' startIcon={<WebAssetIcon/>}>
            Website
          </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
// P2P Card
function BigP2P() {
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
function BigSWEA() {
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
function BigExsys() {
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
function BigIOT() {
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
export {BigBachelor, BigP2P, BigIOT, BigSWEA, BigExsys}