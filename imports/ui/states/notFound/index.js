import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import './main.html'

Template.notFound.events({
  'click .home': (event, templateInstance) => {
    FlowRouter.go('home')
  }
})
