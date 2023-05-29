import React from 'react';
const pages = ['AboutMe', 'Portfolio', 'Resume', 'Contact']

function NavTabs({currentPage, handlePageChange}){
    
    return(
        <ul className='nav nav-tabs'>
           
            {pages.map(function(page, i){
                return (
                    <li className ='nav-item' key={i}>
                    <a
                    href = {`#${page}`}
                    onClick= {() => handlePageChange(page)}
                    className={currentPage === page ? 'nav-link active': 'nav-link'}
                    >
                        {page}
                    </a>
                </li>
                )
            }
            )}
            
{/*             
            <li className ='nav-item'>
                <a
                href = 'AboutMe'
                onClick= {() => handlePageChange('AboutMe')}
                >
                    AboutMe
                </a>
            </li> 
             <li className ='nav-item'>
                <a
                href = 'Portfolio'
                onClick= {() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>
            </li>
            <li className ='nav-item'>
                <a
                href = 'Resume'
                onClick= {() => handlePageChange('Resume')}
                >
                    Resume
                </a>
            </li>
            <li className ='nav-item'>
                <a
                href = 'Contact'
                onClick= {() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </li> */}
        </ul>
    )
}

export default NavTabs