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
        <Route path="/portfolio/bachelor" element={<IndividualLayout />} />
        <Route path="/portfolio/SWEA" element={<IndividualLayout />} />
        <Route path="/portfolio/EXSYS" element={<IndividualLayout />} />
        <Route path="/portfolio/P2P" element={<IndividualLayout />} />
        <Route path="/portfolio/IOT" element={<IndividualLayout />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App
