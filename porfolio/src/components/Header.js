import React from 'react';
import NavTabs from './NabTabs';

function Header({currentPage, handlePageChange}){
    return (
        <div>
             <h2>Shea Schwennicke</h2>
             <NavTabs currentPage = {currentPage} handlePageChange={handlePageChange}/>
        </div>
    )

}

export default Header