import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
import NotFound from '/imports/components/NotFound.jsx'
import signIn from './signIn'

const name = 'notFound'
FlowRouter.route('/not-found', {
  name,
  triggersEnter: [() => {
    if (!Meteor.userId()) {
      FlowRouter.go(signIn)
    }
  }],
  action: (params, queryParams) => {
    mount(NotFound)
  }
})

export default name
