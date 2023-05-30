import React from 'react'
import resume from './../../files/resume.pdf'
import './../../styles/Resume.css'

function Resume(){
    return(
        <div className= "resume">
        <h2>RESUME</h2>
        <a 
        href={resume}
        download="SheaSchwennicke-Resume"
        target= "_blank"
        rel="noreferrer"
        > Download: Shea Schwennicke's Resume</a>
        <h3>Skills</h3>
        <ul className= "skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>REST API</li>
            <li>Server Side API</li>
            <li>Fetch</li>
            <li>Node.js</li>
            <li>Express.js</li>
        </ul>
        </div>
    )
}

export default Resume