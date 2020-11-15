import React from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Post.css'
import config from '../config'
import Y51tContext from '../Y51tContext'
import Y51tError from '../Y51tError'
// import { Link } from 'react-router-dom';


class Post extends React.Component{

   static defaultProps = {
      history: {
          push: () => { },
      }   
  }


   constructor(props){
      super(props)
      this.state = {
         startDate : ''
      }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(date) {
      this.setState({
         startDate : date
      })
   }

  static contextType = Y51tContext

   handleSubmit = (e) => {
      e.preventDefault()

      const { location_name,date_viewed,category_id,content,username } = e.target
      const getSighting ={
         location_name:location_name.value,
         date_viewed : date_viewed.value,
         category_id : category_id.value,
         content : content.value,
         username : username.value 
     }
     fetch(`${config.API_ENDPOINT}/api/sightings`,{
         method:'POST',
         body: JSON.stringify(getSighting),
         headers:{
            'Accept': 'application/json',
            'content-type': 'application/json'
         }
         })
         .then(sightingsRes => {
            if (!sightingsRes.ok){
               return sightingsRes.json().then(e => Promise.reject(e))
            }
            return sightingsRes.json()
         })
         .then(sighting => {
            location_name.value = ''
            date_viewed.value = ''
            category_id.value = ''
            content.value = ''
            username.value = ''
            console.log(this.context, 'This should work')
            this.context.addSighting(sighting)
            console.log(this.props, 'this should work also')
            // this.props.history.push("/")
            window.location = '/forum'
         })
         .catch(error => {
         console.log(error)
         })
      }
     
      
   render(){
      const {location} = this.props
      const {category = []} = this.context
   return(
      <Y51tError>
         <h2>Post Your Sighting!</h2>
         <div className='post-form'>
            <form  onSubmit={this.handleSubmit}>
               <label htmlFor='location_name'>Location:</label>
               <br />
               <select name="location_name" id="location_name">
                  <option value= {null}>Choose One</option>
                  {location.map(l => 
                     <option key={l.id} value={l.place}>
                        {l.place}
                     </option>
                  )}
               </select>
                  <br />
               <label htmlFor='date_viewed'>Date:</label>
               <br />
               <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  className='date'
                  name='date_viewed'
                  id='date_viewed'
                  />
               <br/>
               <label htmlFor='category_id'>Category:</label>
               <br />
               <select name="category_id" id="category_id">
                  <option>Choose One</option>
                  {category.map( c => 
                     <option key={c.id} value={c.id}>
                        {c.title}
                     </option>
                     )}
               </select>
               <br />
               <label htmlFor='content'>Share your encounter: </label>
               <br />
               <textarea name='content' id='content' />       
               <br />
               <label htmlFor='username'>Your Name:</label>
               <br />
               <input type='text' name='username' id='username' />
               <br />
               <button 
               className='postsubmitbtn'
               type='submit' 
               >
               Submit
               </button>
            </form>   
            </div> 
         </Y51tError>     
      )
   }
}


export default Post