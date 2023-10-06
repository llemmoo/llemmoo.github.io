import React, { Component } from 'react'
import Box from '@mui/material/Box';
import { Backdrop, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function BachelorCard() {
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
        <Typography variant='h6'>
          Bachelor Thesis
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Gaze interaction in video games, using eye tracking, is in growth. No longer only
          used for novelty interaction but also as an integral part of the game’s mechanics.
          However, while gaze interaction is becoming more and more prevalent, 
          gaze aversion appears to continue in novelty.
          </Typography>
        </CardContent>
      </Card>
    )
}
export {BachelorCard}