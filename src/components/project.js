import React , { useState } from 'react';
// import { useRoutes } from "react-router-dom";
import AboutMe from './pages/me';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio'
import Nav from './navigation';

function Project() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
  
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <AboutMe />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );

}

export default Project;
