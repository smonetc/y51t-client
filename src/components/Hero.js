import React from 'react'
import '../styles/Hero.css'
import ufo from './ufo.png'


class Hero extends React.Component{
    render(){
        return(
         <div className='hero-container'>
            <div className="img-section">
               <img src={ufo} alt="ufo"/>  
            </div>
            <div className='hero-text'>
               <h2><span>You 5aw 1t Too</span> is a home for those who know we
               are not alone in this Universe! </h2>
               <br />
               <h4>
                  All you need to do to get started is start posting!
                  Here at Y51T you're able to post a sighting, <br /> view other 
                  sightings and vote on the sightings, you believe are real sightings. 
               </h4>
            </div>
            <br />
            <div className='call-to-action'>
               <h3>
                  <a href='https://y51t.smonetc.vercel.app/post' className='calltoaction'>Start Posting!</a>
               </h3>
            </div>
         </div>
        )
    }
}

export default Hero

