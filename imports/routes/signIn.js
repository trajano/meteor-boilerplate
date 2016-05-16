import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
import home from './home'
import SignIn from '/imports/components/SignIn.jsx'

const name = 'signIn'
FlowRouter.route('/sign-in', {
  name,
  triggersEnter: [() => {
    if (Meteor.userId()) {
      FlowRouter.go(home)
    }
  }],
  action: (params, queryParams) => {
    mount(SignIn)
  }
})

export default name
