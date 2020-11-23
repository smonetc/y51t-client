import React from 'react'
import ReactDOM from 'react-dom'
import Accordion from '../components/Accordion'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Accordion />, div)
  ReactDOM.unmountComponentAtNode(div)
})