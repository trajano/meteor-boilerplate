import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import './main.html'

Template.signIn.events({
  'click .home': (event, templateInstance) => {
    FlowRouter.go('home')
  }
})
