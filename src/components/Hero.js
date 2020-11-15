import React from 'react'
import '../styles/Hero.css'
import {Link} from 'react-router-dom'
import ufo from './ufo.png'


class Hero extends React.Component{
    render(){
        return(
         <div className='hero-container'>
            <div className="img-section">
               <img src={ufo} alt="ufo"/>  
            </div>
            <div className='hero-text'>
               <h2>You 5aw 1t Too is a home for those who know we
               are not alone in this Universe! </h2>
               <br />
               <h4>
                  All you need to do to get started is start posting!
                  Here at Y51T you're able to post a sighting, <br /> view other 
                  sightings and vote on the sightings, you believe are real sightings. 
               </h4>
               <Link to='/post' className='calltoaction'>Start Posting!</Link>
            </div>
         </div>
        )
    }
}

export default Hero

