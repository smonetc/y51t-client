import React from 'react'
import '../styles/Forum.css'
import Sightings from './Sightings'
import Y51tContext from '../Y51tContext'

class Forum extends React.Component{
   static defaultProps = {
      match: {
        params: {}
      }
   }

  
   static contextType = Y51tContext



   render(){
      let sightings = this.context.sightings

      return(
         <div className='forum-container'>
            <h1>Sightings</h1>
            <section className='sightings-section'>
               <ul>
                  {sightings.map(sighting =>
                  <li key={sighting.id}  className='sightings'>
                  <Sightings
                  id={sighting.id}
                  location={sighting.location_name}
                  date={sighting.date_viewed}
                  category={sighting.category}
                  content={sighting.content}
                  username={sighting.username}
                  />
                  </li>
                  )}  
               </ul>
            </section>
         </div>
      )
   }
}

export default Forum
