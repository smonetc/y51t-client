import React from 'react'
import './AlienUFO.css'
import alien from './icons8-martian-64.png'
import ufo from './icons8-ufo-64.png'

class AlienUFO extends React.Component{
    render(){
        return(
            <div className='alienufo-container'>
                <h3 className='title'>What we talk about</h3>
                <div className='info-section'> 
                <div className='alienblurp blurp'>
                    <img src={alien} alt='alien'/>
                    <h4>Aliens</h4>
                    <p>hypothetical life which may occur outside of Earth and which did not originate on Earth.</p>
                </div>
                <div className='ufoblurp blurp'>
                    <img src={ufo} alt='ufo'/>
                    <h4>UFOs</h4>
                    <p>unidentified flying object that cannot immediately be identified or explained.</p>
                </div>
                </div>
            </div>
        )
    }
}


export default AlienUFO