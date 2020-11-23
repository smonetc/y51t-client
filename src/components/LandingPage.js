import React from 'react'
import '../styles/LandingPage.css'
import Hero from './Hero'


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