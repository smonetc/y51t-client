import React from 'react'
import ReactDOM from 'react-dom'
import Post from '../components/Post'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Post location={this.props.locations} />, div)
  ReactDOM.unmountComponentAtNode(div)
})