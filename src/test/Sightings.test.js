import React from 'react'
import ReactDOM from 'react-dom'
import Sightings from '../components/Sightings'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Sightings/>, div)
  ReactDOM.unmountComponentAtNode(div)
})