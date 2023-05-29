import React from 'react';
import portugal from './../../images/app-pic.JPG'
import devs from './../../images/devs-stairs.JPG'
import gals from './../../images/gals-boards.JPG'
import pebble from './../../images/pebble-beach.JPG'
import palm from './../../images/palm.jpeg'
import './../../styles/Portfolio.css'

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
    </section>

  
    <section className="app">
    
        <section className="side">
            <a href="https://shopwithpantrypal.herokuapp.com/">
                    <img src={devs} alt="staircase with ocean in the background"/>
                 <h3>Pantry Pal</h3>
             </a>


             <a href="https://open.spotify.com/album/1E6aIrYOcysBusmGfm2Pcm">
                <img src={gals} alt="women walking with surfboards"/>
                <h3>Boom</h3>
             </a>
        </section>
        
        <section className="other">

            <a href="https://www.youtube.com/watch?v=RmY1TJ6B-0g&ab_channel=MsCharlieBrown78%28CharlieRae%29">
                    <img src= {pebble}alt="women walking on a rocky beach"/>
                <h3>Big Things</h3>
             </a>
    
    
            <a href="https://www.youtube.com/watch?v=arxhW1RgDDo&ab_channel=lee57">
                <img src={palm} alt="palm tree and ocean "/>
                <h3>Coming Soon</h3>
            </a>
        </section>
    </section>
</section>

</section>
)
}

export default Portfolio