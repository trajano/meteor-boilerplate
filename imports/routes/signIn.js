import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import home from './home'

const name = 'signIn'
FlowRouter.route('/sign-in', {
  name,
  triggersEnter: [() => {
    if (Meteor.userId()) {
      FlowRouter.go(home)
    }
    AccountsTemplates.options.onSubmitHook = (error, state) => {
      if (!error && (state === 'signIn' || state === 'signUp')) {
        FlowRouter.go(home)
      }
    }
  }],
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      main: name
    })
  }
})

export default name
