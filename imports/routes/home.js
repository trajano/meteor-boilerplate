import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import signIn from './signIn'
import Home from '/imports/components/Home.jsx'
import { mount } from 'react-mounter'

const name = 'home'
FlowRouter.route('/', {
  name,
  triggersEnter: [() => {
    if (!Meteor.userId()) {
      FlowRouter.go(signIn)
    }
  }],
  action: (params, queryParams) => {
    mount(Home)
  }
})

export default name
