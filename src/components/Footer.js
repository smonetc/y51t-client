import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
   return(
      <>
         <div className='footer-section'>
            <h4>Created by  {''}
               <a 
               href='https://smonetc.github.io/monetcooper/' 
               target='_blank'
               rel='noreferrer'
               >
               Monet Cooper
               </a>
            </h4>
            <a 
            href='https://github.com/smonetc/y51t-client' 
            target='_blank'
            rel="noreferrer">
               <i className="fab fa-github-alt" />
            </a>
            <a 
            href='https://twitter.com/helloitsmonet' 
            target='_blank' 
            className='twitter'
            rel='noreferrer'
            >
               <i className="fab fa-twitter" />
            </a>
         </div>
      </>
   )
}

export default Footer