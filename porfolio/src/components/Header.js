import React from 'react';
import NavTabs from './NabTabs';
import '../styles/Header.css'

function Header({currentPage, handlePageChange}){
    return (
        <header className= "header">
             <h1>Shea Schwennicke</h1>
             <NavTabs currentPage = {currentPage} handlePageChange={handlePageChange}/>
        </header>
    )

}

export default Header