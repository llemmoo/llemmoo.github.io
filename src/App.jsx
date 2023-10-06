import { useState } from 'react'
import TopBar from './components/Navigation/NavBar';
import { Route, Routes } from "react-router-dom"
import ContactForm from './components/Information/ContactForm';
import About from './components/Information/About';
import Index from './Index';
import Portfolio from './components/Portfolio/Portfolio';
import Box from '@mui/material/Box';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"

function AnimatedRoutes(){
  const location = useLocation();
}

function App() {
  return (
    <>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App
