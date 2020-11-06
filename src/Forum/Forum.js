import React from 'react'
import './Forum.css'
import Sightings from '../Sightings/Sightings'
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
      if (this.props.match.params.category_id !== undefined){
        sightings = this.context.sightings.filter(sighting => 
         sighting.category_id === this.props.match.params.category.category) 
      }
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
                  category={sighting.category_id}
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


// {props.sighting.map(sightings =>
// <li key={sightings.id}  className='sightings'>
// <Sightings
// id={sightings.id}
// location={sightings.location_name}
// date={sightings.date_viewed}
// category={sightings.category_id}
// content={sightings.content}
// username={sightings.username}
// />
// </li>)}