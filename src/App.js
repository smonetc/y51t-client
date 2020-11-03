import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import STORE from './STORE'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import Forum from './Forum/Forum'
import Post from './Post/Post'

class App extends React.Component{
   constructor(props){
      super(props)
      this.state = {
      category: STORE.category,
      sightings: STORE.sightings,
      signin: STORE.signin
      }
   }

   render(){
      const {category,sightings} = this.state
      return(
         <div className='website-container'>
            <nav>
               <Navbar />
            </nav>
            <main>
               <Switch>
                  <Route exact path='/' component={() => <LandingPage sighting={sightings} />} />
                  <Route path='/forum' component={() => <Forum sighting={sightings} category={category} />} />
                  <Route path='/post' component={() => <Post category={category} />} />
               </Switch>
            </main>
            <footer>

            </footer>
         </div>
      )
   }
}

export default App;
