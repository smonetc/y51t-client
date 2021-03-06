import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import LandingPage from './components/LandingPage'
import Forum from './components/Forum'
import Post from './components/Post'
import Footer from './components/Footer'
import Y51tContext from './Y51tContext'
import config from './config'
import history from './History'

class App extends React.Component{
   constructor(props){
      super(props)
         this.state = {
         sightings:[],
         category:[],
      }
   }

   setSightings = sightings => {
      this.setState({
        sightings,
        error: null,
      })
    }
    setCategory = category => {
      this.setState({
        category,
        error: null,
      })
    }
   
   async componentDidMount() {
      Promise.all([
     await fetch(`${config.API_ENDPOINT}/api/sightings`),
     await fetch(`${config.API_ENDPOINT}/api/category`)
      ])
      .then(([sightingsRes, categoryRes]) => {
         if (!sightingsRes.ok)
            return sightingsRes.json().then(e => Promise.reject(e))
         if (!categoryRes.ok)
            return categoryRes.json().then(e => Promise.reject(e))
         return Promise.all([sightingsRes.json(), categoryRes.json()])
      })
      .then(([sightings,category]) => {
         this.setState({sightings, category})
      })
      .catch( error => {
         console.log({error})
      })
   }

   handleAddSighting = sighting => {
      this.setState({
         sightings: [...this.state.sightings, //overwrite the existing properties with the ones we're passing
         sighting]
      })
   }

   render(){
      const contextValue = {
         sightings: this.state.sightings,
         category: this.state.category,
         addSighting: this.handleAddSighting,
         }

      return(
         <Y51tContext.Provider value={contextValue}>
             <BrowserRouter history={history}>
               <div className='website-container'>
                  <nav>
                     <Navbar />
                  </nav>
                  <main>
                     <Switch>
                        <Route path="/" exact={true} component={() => <LandingPage />} />
                        <Route path="/forum" component={() => <Forum  />} />
                        <Route path="/post" component={() => <Post />} /> 
                     </Switch>
                  </main>
                  <footer>
                     <Footer/>
                  </footer>
               </div>
            </BrowserRouter>
         </Y51tContext.Provider>
      )
   }
}

export default App;
