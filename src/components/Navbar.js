import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'


class Navbar extends React.Component{
   render() {
      return(
         <> 
            <Link to='/' className="logo" data-text='Y51T?!'>
               Y51T?!
            </Link>
            <div className="button-container">              
               <Link to='/forum' className='nav-button'>
               Forum
               </Link>

               <Link to='/post' className='nav-button'>
               Post
               </Link>
            </div>
         </>   
      )
   }
}

export default Navbar