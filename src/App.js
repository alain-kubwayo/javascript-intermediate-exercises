import { Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
// pages and components import
import Home from './pages/Home';
import Education from './pages/Education';
import Trainings from './pages/Trainings';
import Projects from './pages/Projects';
import Navbar from './components/navbar/Navbar';
import Skills from './pages/Skills';



function App() {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education/>} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
