import React from 'react'
import '../styles/Sightings.css'

class Accordion extends React.Component {
   constructor() {
     super();
     this.handleClick = this.handleClick.bind(this);
   }
   
   componentDidMount() {
     this.handleClick();
   }
   
   handleClick() {
     const acc = this._acc.children;
     for (let i = 0; i < acc.length; i++) {
       let a = acc[i];
       a.onclick = () => a.classList.toggle("active");
     }
   }
   
   render() {
     return (
       <div 
         ref={a => this._acc = a} 
         onClick={this.handleClick}>
         {this.props.children}
       </div>
     )
   }
}

export default Accordion