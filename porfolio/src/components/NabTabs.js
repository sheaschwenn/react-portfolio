import React from 'react';

function NavTabs({currentPage, handlePageChange}){
    return(
        <ul className='nav nav-tabs'>
            <li className ='nav-item'>
                <a
                href = 'AboutMe'
                onClick= {() => handlePageChange('AboutMe')}
                >
                    AboutMe
                </a>
            </li>
        </ul>
    )
}

export default NavTabs