import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/me';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio'
import Nav from './navigation';


function Project() {
  return (
      <Router>
          <div>
              <Nav />
              <Routes>
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/" element={<AboutMe />} />
              </Routes>
          </div>
      </Router>
  );
}

export default Project;
