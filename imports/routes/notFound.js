import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
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
    BlazeLayout.render('layout', {
      main: name
    })
  }
})

export default name
