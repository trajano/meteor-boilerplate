/**
 * The imports/components folder contains React components used in the
 * application.  There is no `index.js` file in this folder because the
 * components are expected to be imported by each other or loaded from
 * {@link module:imports/routes}.
 *
 * Each component module will export the class wrapped in a
 * createContainer call to make sure they are reactive.
 * @module
 */
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import React, { PropTypes } from 'react'

/**
 * Home component.
 */
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
