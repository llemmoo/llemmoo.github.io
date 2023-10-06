import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Index from './Index';
import Portfolio from './components/Portfolio/Portfolio';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"

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
