import React from 'react';

function Portfolio(){
return (
<section >
<h2>PORTFOLIO</h2>
<section className='all-apps'>
    
    <section className="first-app app">
        <a href="https://lauriefish22.github.io/Colorful-Careers/#">
            <img src="./images/app-pic.JPG"alt="Southern Portual coastline"/>
            <h3>Colorful Careers</h3>
        </a>
    </section>

  
    <section className="app">
    
        <section className="side">
            <a href="https://shopwithpantrypal.herokuapp.com/">
                    <img src="./images/devs-stairs.JPG"alt="staircase with ocean in the background"/>
                 <h3>Pantry Pal</h3>
             </a>


             <a href="https://open.spotify.com/album/1E6aIrYOcysBusmGfm2Pcm">
                <img src="./images/gals-boards.JPG"alt="women walking with surfboards"/>
                <h3>Boom</h3>
             </a>
        </section>
        
        <section class="other">

            <a href="https://www.youtube.com/watch?v=RmY1TJ6B-0g&ab_channel=MsCharlieBrown78%28CharlieRae%29">
                    <img src="./images/pebble-beach.JPG"alt="women walking on a rocky beach"/>
                <h3>Big Things</h3>
             </a>
    
    
            <a href="https://www.youtube.com/watch?v=arxhW1RgDDo&ab_channel=lee57">
                <img src="./images/palm.jpeg"alt="palm tree and ocean "/>
                <h3>Coming Soon</h3>
            </a>
        </section>
    </section>
</section>

</section>
)
}

export default Portfolio