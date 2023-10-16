import { Button, Backdrop, Card, CardActionArea, CardContent, CardMedia, CardActions, Typography, Box, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import p2pPDF from '../../../public/assets/projects/p2p/p2pPDF.pdf';
import bachelorPDF from '../../../public/assets/projects/bachelor/bachelorPDF.pdf';
import exsysPDF from '../../../public/assets/projects/exsys/exsysPDF.pdf';
// Card body text theme
const bodyText = createTheme({
  typography: {
    fontFamily: '"Martian Mono"',
    fontSize: 12,
    fontWeightLight:400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    letterSpacing: 200,
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
        <Typography >
          Bachelor Thesis
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary' lineHeight={1.5}>
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
          </Typography>
          </ThemeProvider>
          <CardActions>
        <ThemeProvider theme={buttonText}>
          <Button target='_blank' href={bachelorPDF} startIcon={<PictureAsPdfIcon/>}>
              Project report PDF
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
        <Card style={{ maxWidth: '90vh', maxHeight: '90vh'}}>
          <CardActionArea>
            <CardMedia 
            onClick={handleOpen}
            component='img'
            height='300'
            image='/p2p.jpg'
            alt="P2P graphs"
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
            Sensor-driven P2P Web Application
            </Typography>
            </ThemeProvider>
            <ThemeProvider theme={bodyText}>
            <Typography color='primary' lineHeight={1.5}>
            When tasked to build a sensor data-driven application, we chose to provide a solution
            that would hit closer to home for us. We chose to work with a gaming-health monitoring
            platform for our solution. Provided with the sensors made available to us, we built 
            something we could use in our everyday lives. We implemented the idea using ML, cloud
            technologies, and MQTT brokerage for our web application. For the sensory side of things, 
            the M5Stack eco-system was a pre-requisite from the get-go and we decided to build upon
            this with an ESP32 Arduino to handle specific sensors. The M5Stack's ability to receive and
            send sensor data through it's micropython libraries made it easy for MQTT integration.
            </Typography>
            </ThemeProvider>
            <CardActions>
          <ThemeProvider theme={buttonText}>
            <Button target='_blank' href='https://gitlab.au.dk/golfp2pcloud/cloudproject' startIcon={<GitHubIcon/>}>
              GitLab Link
            </Button>
            <Button target='_blank' href='https://cloudproject-8112c.web.app/' startIcon={<WebAssetIcon/>}>
              Website
            </Button>
            <Button target='_blank' href={p2pPDF} startIcon={<PictureAsPdfIcon/>}>
              Project report PDF
            </Button>
          </ThemeProvider>
        </CardActions>
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
      <Card style={{ maxWidth: '90vh', maxHeight: '90vh'}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='300'
          image='/HotCiv.jpg'
          alt="HotCiv"
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
              src="/HotCiv.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Civilization Type Game, SWEA
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary' lineHeight={1.5}>
          A course and project centered around the idea of real software development, instead of
          the less intensive and more prototype oriented programming we had worked with up until
          that point. The project's intentions were to teach the valuable lessons of refactoring,
          agile development and the benefits of producing reusable, refactored code. This project taught
          me the use of design patterns in software development, and the importance of structured
          software development. The game was built using Java, structured in multiple assignments, meant
          to exercise refactorization and employment of design patterns in software as more and more advanced
          functionality was implemented.
          </Typography>
          </ThemeProvider>
          <CardActions>
        <ThemeProvider theme={buttonText}>
          <Button target='_blank' href='https://gitlab.au.dk/au639577/alphaciv' startIcon={<GitHubIcon/>}>
            GitLab Link
          </Button>
        </ThemeProvider>
      </CardActions>
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
      <Card style={{ maxWidth: '90vh', maxHeight: '90vh'}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='300'
          image='/exsys.jpg'
          alt="exsys"
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
              src="/exsys.jpg"/>
          </Backdrop>
        </CardActionArea>
        <CardContent>
        <ThemeProvider theme={titleText}>
        <Typography justifyContent='center'>
          Tech-wiki for Adservice
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary' lineHeight={1.5}>
          A tech-wiki built for Adservice as part of a course at AU. We were looking to
          delve into experimental systems development to aquaint ourselves with ethnographic
          methods and approaches to systems development. 
          </Typography>
          </ThemeProvider>
          <CardActions>
        <ThemeProvider theme={buttonText}>
          <Button target='_blank' href='https://gitlab.au.dk/exsys2022/da6/etc-etc-etc/project' startIcon={<GitHubIcon/>}>
            GitLab Link
          </Button>
          <Button target='_blank' href='https://exsyswiki-6a66a.web.app/' startIcon={<WebAssetIcon/>}>
            Website
          </Button>
          <Button target='_blank' href={exsysPDF} startIcon={<PictureAsPdfIcon/>}>
            Project report PDF
          </Button>
        </ThemeProvider>
      </CardActions>
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
      <Card style={{ maxWidth: '90vh', maxHeight: '90vh'}}>
        <CardActionArea>
          <CardMedia 
          onClick={handleOpen}
          component='img'
          height='300'
          image='/iot.jpg'
          alt="iot"
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
          IoT Course, M5Stack and Python
          </Typography>
          </ThemeProvider>
          <ThemeProvider theme={bodyText}>
          <Typography color='primary' lineHeight={1.5}>
          Course designed to show the power of python backend development and the deployment of
          said backend on an linux apache server.
          </Typography>
          </ThemeProvider>
          <CardActions>
        <ThemeProvider theme={buttonText}>
          <Button target='_blank' href='https://gitlab.au.dk/gruppe-14/assigment-1' startIcon={<GitHubIcon/>}>
            Portfolio Assignment
          </Button>
          <Button target='_blank' href='https://gitlab.au.dk/gruppe-14/assignment-2' startIcon={<GitHubIcon/>}>
            Random Exam Topic
          </Button>
          <Button target='_blank' href='https://gitlab.au.dk/gruppe-14/assignment-3' startIcon={<GitHubIcon/>}>
            Data-driven site
          </Button>
          <Button target='_blank' href='https://gitlab.au.dk/au639577/assignment4/' startIcon={<GitHubIcon/>}>
            Sensor-driven data site
          </Button>
        </ThemeProvider>
      </CardActions>
        </CardContent>
      </Card>
    )
}
export {BigBachelor, BigP2P, BigIOT, BigSWEA, BigExsys}