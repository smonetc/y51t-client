import React from 'react'
import Y51tContext from '../Y51tContext'

class Sightings extends React.Component{
    static defaultProps = {
        match: {
          params: {}
        }
    }

    static contextType = Y51tContext

   render(){
         const { date, category, location, content, username} = this.props 
         return(
            <div>
               <div>
                  <p>Date: {date}</p>
                  <p>Type: {category}</p>
                  <p>Location: {location}</p>
                  <p>Content: {content}</p>
                  <p>Author: {username}</p>
               </div>
            </div>
         )
   }
}

export default Sightings