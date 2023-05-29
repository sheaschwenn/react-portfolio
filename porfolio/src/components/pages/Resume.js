import React from 'react'
import resume from './../../files/resume.pdf'

function Resume(){
    return(
        <div>
        <a 
        href={resume}
        download="Shea-Resume"
        target= "_blank"
        rel="noreferrer"
        > Resume</a>

        <ul>
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