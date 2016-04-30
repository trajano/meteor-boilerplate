/**
 * states Angular module definition.
 *
 * The UI Router configuration is performed here.
 */
import ngUiRouter from 'angular-ui-router'
import uiComponents from '/imports/ui/components'
import { Meteor } from 'meteor/meteor'

export default angular.module('ui.states', [ngUiRouter, uiComponents])
  .run(($rootScope, $log, $urlMatcherFactory) => {
    if (!Meteor.isProduction) {
      $rootScope.$on('$destroy', $rootScope.$on('$stateChangeError', $log.log.bind($log)))
    }
    $urlMatcherFactory.strictMode(false)
  })
  .config(($urlRouterProvider) => {
    $urlRouterProvider
      .when('', '/')
      .otherwise('/not-found')
  })
