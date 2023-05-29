import React from 'react';
import profilePic from './../../images/profile-pic.jpeg'
import './../../styles/AboutMe.css'

export default function About(){
    return(
        <section className="me">
        <section className="profile-pic">
            
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               
                <defs>
              
                    <clipPath id="blob" clipPathUnits="userSpaceOnUse"  >
                        <path fill="#FF0066" d="M39.7,-70.3C51.1,-62.1,59.8,-50.8,69.1,-38.6C78.3,-26.4,88.1,-13.2,87.2,-0.5C86.4,12.2,74.8,24.4,65.6,36.6C56.3,48.8,49.3,61.1,38.8,71.1C28.2,81.2,14.1,89,1.1,87.1C-11.9,85.2,-23.9,73.6,-37.5,65.3C-51.1,57,-66.4,52.1,-74,41.8C-81.6,31.5,-81.4,15.7,-80.8,0.3C-80.2,-15.1,-79.3,-30.1,-71.5,-40.1C-63.6,-50,-49,-54.8,-36,-62C-22.9,-69.2,-11.5,-78.9,1.3,-81.2C14.1,-83.5,28.2,-78.5,39.7,-70.3Z" transform="translate(100 100)" />
                    </clipPath>
                </defs>
               
                <image  width= "100%" height= "100%" preserveAspectRatio = "xMinYMin slice" xlinkHref= {profilePic} clip-path="url(#blob)" />
            </svg>
        </section>
        <div className='about'>
                <h2>ABOUT ME</h2>
                <p>Hi! I am a California based fullstack web developer! My current skills include HTML, CSS, JavaSCript, React, SQL, MongoDB and so much more! 
                    Check out my portfolio to see some of my previous work and the resume page list of my current skills. </p>
            </div>
     </section>
    )
}