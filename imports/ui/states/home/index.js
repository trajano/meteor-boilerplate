import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import './main.html'
import signIn from '/imports/routes/signIn'

Template.home.events({
  'click .logout': (event, templateInstance) => {
    Meteor.logout(() => {
      FlowRouter.go(signIn)
    })
  }
})
