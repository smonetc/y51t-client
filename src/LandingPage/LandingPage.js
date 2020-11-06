import React from 'react'
import './LandingPage.css'
import AlienUFO from '../AlienUFO/AlienUFO'
import Hero from '../Hero/Hero'


class LandingPage extends React.Component{
    render(){
        return(
            <div className='landing-container'>
               <Hero/>
            </div>
        )
    }
}

export default LandingPage