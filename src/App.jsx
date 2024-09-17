import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import Navbar from './components/Navigationbar';
import { Main } from './components/Main';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Main page displaying all sections */}
        <Route path="/home" element={<Home />} /> {/* Route to Home component */}
        <Route path="/about" element={<About />} /> {/* Route to About component */}
        <Route path="/projects" element={<Projects />} /> {/* Route to Projects component */}
        <Route path="/contact" element={<Contact />} /> {/* Route to Contact component */}
      </Routes>
    </Router>
  );
}

export default App;
