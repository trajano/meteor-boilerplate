import './home'
import notFound from './notFound'
import './signIn'
import { FlowRouter } from 'meteor/kadira:flow-router'

FlowRouter.triggers.enter([(context) => {
  document.title = context.route.name
}])

FlowRouter.notFound = {
  action: () => FlowRouter.go(notFound)
}
