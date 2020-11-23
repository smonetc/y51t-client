import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'



it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <Router>
     <Navbar />
  </Router>, div)
  ReactDOM.unmountComponentAtNode(div)
})