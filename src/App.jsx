import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Index from './Index';
import Portfolio from './components/Portfolio/Portfolio';


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
