/**
 * Defines the route configuration that applies globally.
 * @module
 */
import notFound from './notFound'
import { FlowRouter } from 'meteor/kadira:flow-router'

/**
 * @event
 * @memberof module:imports/routes
 */
FlowRouter.triggers.enter([(context) => {
  document.title = context.route.name
}])

/**
 * @event
 * @memberof module:imports/routes
 */
FlowRouter.notFound = {
  action: () => FlowRouter.go(notFound)
}
