import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


class Navbar extends React.Component{
   render() {
      return(
         <>   
            <Link to='/' className="logo">
               Y51T?!
            </Link>
            <div className="button-container">
               <Link to='/forum' className='nav-button'>
                  Forum
               </Link>
               {/* <Link to='/login' className='nav-button'>
                  Login
               </Link> */}
                <Link to='/post' className='nav-button'>
                 Post
               </Link>
            </div>
         </>   
      )
   }
}

export default Navbar