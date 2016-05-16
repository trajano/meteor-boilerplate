import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import React, { PropTypes } from 'react'

class Home extends React.Component {
  logout () {
    Meteor.logout(() => {
      FlowRouter.go('signIn')
    })
  }

  render () {
    return <div>
             <h1>Home</h1>
             <p>hello
               { ' ' }
               { this.props.userEmail }
             </p>
             <p>Go to a <a href='non-existent-page'>non-existent page</a>.</p>
             <p><a href='#' onClick={ this.logout }>Sign out</a></p>
           </div>
  }
}
Home.propTypes = {
  userEmail: PropTypes.string
}

export default createContainer(() => {
  'reactive data access here'
  return {
    userEmail: Meteor.user() ? Meteor.user().emails[0].address : null
  }
}, Home)
