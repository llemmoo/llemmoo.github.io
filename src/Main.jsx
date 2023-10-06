import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, useLocation } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, Grid } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>
)
