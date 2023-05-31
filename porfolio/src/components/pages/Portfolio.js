import React from 'react';
import portugal from './../../images/app-pic.JPG'
import devs from './../../images/devs-stairs.JPG'
import gals from './../../images/gals-boards.JPG'
import pebble from './../../images/pebble-beach.JPG'
import palm from './../../images/palm.jpeg'
import './../../styles/Portfolio.css'
// import Project from './../Project'

function Portfolio(){
return (
<section className='portfolio' >
<h2>PORTFOLIO</h2>
<section className='all-apps'>
    
    <section className="first-app app">
        <a href="https://lauriefish22.github.io/Colorful-Careers/#">
            <img src={portugal}alt="Southern Portugal coastline"/>
            <h3>Colorful Careers</h3>
        </a>
        <a href="https://github.com/lauriefish22/Colorful-Careers">
                <h4>GitHub</h4>
             </a>
    </section>

  
    <section className="app">
    
        <section className="side">
            <a href="https://shopwithpantrypal.herokuapp.com/">
           
                    <img src={devs} alt="staircase with ocean in the background"/>
                    <h3 className= 'title'>Pantry Pal</h3>
             </a>
             <a href="https://github.com/sheaschwenn/Pantrypal">
                <h4>GitHub</h4>
             </a>

             <a href="https://nameless-brushlands-92210.herokuapp.com/">
                <img src={gals} alt="women walking with surfboards"/>
                <h3>JATE</h3>
             </a>
             <a href="https://github.com/sheaschwenn/text-editor">
                <h4>GitHub</h4>
             </a>
        </section>
        
        <section className="other">

            <a href="https://tech-blog-cmv.herokuapp.com/">
                    <img src= {pebble}alt="women walking on a rocky beach"/>
                <h3>Tech Blog</h3>
             </a>
             <a href="https://github.com/sheaschwenn/tech-blog">
                <h4>GitHub</h4>
             </a>
    
    
            <a href="https://note-writting.herokuapp.com/">
                <img src={palm} alt="palm tree and ocean "/>
                <h3>Note Taker</h3>
                <a href="https://github.com/sheaschwenn/Note-Taker">
                <h4>GitHub</h4>
             </a>
            </a>
        </section>
    </section>
</section>

</section>
)
}

export default Portfolio