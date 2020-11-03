import React from 'react'
import './Hero.css'


class Hero extends React.Component{
    render(){
        return(
         <div className='hero-container'>
            <div className='hero-text'>
               <h2>You 5aw 1t Too is a home for those who know we
               are not alone in this Universe! </h2>
               <br />
               <h4>
                  All you need to do to get started is signin and start posting!
                  Here at Y51T you're able to post a sighting, <br /> view other 
                  sightings and vote on the sightings, you believe are real sightings. 
               </h4>
            </div>
            <div className="img-section">
               <img src='https://dummyimage.com/300x300/000/fff' alt="placeholder pic"/>
            </div>
         </div>
        )
    }
}

export default Hero

