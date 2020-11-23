import React from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/Post.css'
import config from '../config'
import Y51tContext from '../Y51tContext'
import Y51tError from '../Y51tError'
import ValidationError from '../ValidationError'


class Post extends React.Component{

   static defaultProps = {
      history: {
          push: () => { },
      }   
  }


   constructor(props){
      super(props)
      this.state = {
         startDate : '',
         content: {
            value: '',
            touched:false
          },
          username: {
            value: '',
            touched:false
          },
          errorMessage: null
      }
      this.handleChange = this.handleChange.bind(this)
   }

   static contextType = Y51tContext

   handleChange(date) {
      this.setState({
         startDate : date
      })
   }
   updateContent(content) {
      this.setState({
         content: {value:content, touched: true}
      })
   }
   updateUsername(username) {
      this.setState({
         username: {value:username, touched: true}
      })
   }

   handleSubmit = (e) => {
      e.preventDefault()

      const { location_name,date_viewed,category_id,content,username } = e.target
      if (this.isValid()){
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
            window.location = '/forum'
         })
         .catch(error => {
         console.log(error)
         })
      }
   }
   isValid = () => {
      const content = this.state.content.value.trim()
      const username = this.state.username.value.trim()
      const provideInfo = {content,username}
      for (const [key, value] of Object.entries(provideInfo)) {
         if(value.length <= 3 ){
            this.setState({errorMessage: `Please provide more info for ${key}`});
            return false;
         }
      }
      return true;
   }
   render(){
      const {location} = this.props
      const {category = []} = this.context
   return(
      <Y51tError>
         <h2>Post Your Sighting!</h2>
         <div className='post-form'>
            <form  onSubmit={this.handleSubmit}>
               <label htmlFor='location_name' className='label'> * Location:</label>
               <br />
               <select 
               name="location_name" 
               id="location_name"
               required>
                  <option value=''>Choose One</option>
                  {location.map(l => 
                     <option key={l.id} value={l.place}>
                        {l.place}
                     </option>
                  )}
               </select>
                  <br />
               <label htmlFor='date_viewed' className='label'> * Date:</label>
               <br />
               <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  className='date'
                  name='date_viewed'
                  id='date_viewed'
                  placeholderText='Date of sighting'
                  required
                  />
               <br/>
               <label htmlFor='category_id' className='label'> * Category:</label>
               <br />
               <select 
               name="category_id" 
               id="category_id"
               required
               >
                  <option value=''>Choose One</option>
                  {category.map( c => 
                     <option key={c.id} value={c.id}>
                        {c.title}
                     </option>
                     )}
               </select>
               <br />
               <label htmlFor='content' className='label'> * Share your encounter: </label>
               <br />
               <textarea
               className='textarea' 
               name='content' 
               id='content'
               placeholder='Tell your story'
               onChange={e => this.updateContent(e.target.value)}
               required />       
               <br />
               <label htmlFor='username' className='label'> * Your Name:</label>
               <br />
               <input 
               type='text' 
               name='username' 
               id='username'
               placeholder='Your name'
               onChange={e => this.updateUsername(e.target.value)}
               required />
               <br />
               <button 
               className='postsubmitbtn'
               type='submit' 
               >
               Submit
               </button>
               {this.state.errorMessage && <ValidationError message={this.state.errorMessage}/>}

            </form>   
            </div> 
         </Y51tError>     
      )
   }
}


export default Post