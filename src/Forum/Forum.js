import React from 'react'
import './Forum.css'
import Sightings from '../Sightings/Sightings'

export default function Forum (props){

   return(
        <div className='forum-container'>
            <h1>Sightings</h1>
            <section className='sightings-section'>
               <ul>
                  {props.sighting.map(sightings =>
                  <li key={sightings.id}  className='sightings'>
                     <Sightings
                     id={sightings.id}
                     location={sightings.location_name}
                     date={sightings.date_viewed}
                     category={sightings.category_id}
                     content={sightings.content}
                     username={sightings.username}
                     />
                  </li>
                  )}
               </ul>
            </section>
        </div>
   )  
}
