import React from 'react'
import Y51tContext from '../Y51tContext'
// import { format } from 'date-fns'
import Accordion from './Accordion'
import '../styles/Sightings.css'
import moment from 'moment'

class Sightings extends React.Component{
   
    static defaultProps = {
        match: {
          params: {}
        }
    }



    static contextType = Y51tContext

   

   render(){
         const { date, category, location, content, username} = this.props
         const formatdate = date 
         const responseDate = moment(formatdate).format('MM/DD/YYYY')
         return(
            <div>
               <Accordion>
                  <div className='accor'>
                     <div className= 'inline-section'>
                        <div className='head'>
                           <p>Date: {responseDate}</p> 
                           {/* <p>{format(date, 'Do MMM YYYY')}</p> */}
                           <p>Type: {category}</p>
                           <p>Location: {location}</p>
                        </div>
                     </div>
                     <div className='panel'>
                        <p>Content: {content}</p>
                        <p>Author: {username}</p>
                     </div>
                  </div>
               </Accordion>
            </div>
         )
   }
}

export default Sightings