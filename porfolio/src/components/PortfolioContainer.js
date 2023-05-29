import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
// import NavTabs from './NabTabs'
import Footer from './Footer'
import Header from './Header'
import './../styles/PortfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }

    return <Contact />;
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div className= 'body'>
        <Header currentPage = {currentPage} handlePageChange={handlePageChange}/>
        {/* <NavTabs currentPage = {currentPage} handlePageChange={handlePageChange}/> */}
        {renderPage()}
        <Footer/>
    </div>
  )
}
