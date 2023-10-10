import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Index from './Index';
import { PortfolioLayout, IndividualLayout } from './components/Portfolio/Portfolio';


function AnimatedRoutes(){
  const location = useLocation();
}

function App() {
  return (
    <>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/portfolio" element={<PortfolioLayout />} />
        <Route path="/portfolio/bachelor" element={<PortfolioLayout />} />
        <Route path="/portfolio/SWEA" element={<PortfolioLayout />} />
        <Route path="/portfolio/EXSYS" element={<PortfolioLayout />} />
        <Route path="/portfolio/P2P" element={<PortfolioLayout />} />
        <Route path="/portfolio/IOT" element={<PortfolioLayout />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App
