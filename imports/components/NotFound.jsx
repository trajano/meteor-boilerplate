import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'

class NotFound extends React.Component {
  render () {
    return <div>
             <h1>404</h1>
             <p>Not found - go <a href='/'>Home</a></p>
           </div>
  }
}

export default createContainer(() => ({}), NotFound)
