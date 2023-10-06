import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"


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
