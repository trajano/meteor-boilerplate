/**
 * states Angular module definition.
 *
 * The UI Router configuration is performed here.
 */
import ngUiRouter from 'angular-ui-router'
import uiComponents from '/imports/ui/components'
import { Meteor } from 'meteor/meteor'

/**
 * Authentication required.
 * @type {string}
 */
export const AUTH_REQUIRED = 'AUTH_REQUIRED'

/**
 * Authenticated already.
 * @type {string}
 */
export const ALREADY_AUTHENTICATED = 'ALREADY_AUTHENTICATED'

export default angular.module('ui.states', [ngUiRouter, uiComponents])
  .run(($rootScope, $log, $urlMatcherFactory, $state) => {
    $rootScope.$on('$destroy', $rootScope.$on('$stateChangeError',
      /**
       * Handle the state change error.  If the error is `AUTH_REQUIRED`,
       * set the state to `sign-in`.  If the error is `ALREADY_AUTHENTICATED`,
       * set the state to `home`.  All other conditions log the state change
       * error details when not running in production.
       *
       * @param {event} event
       * @param {string} toState
       * @param {*} toParams
       * @param {string} fromState
       * @param {*} fromParams
       * @param {string} error
       */
      (event, toState, toParams, fromState, fromParams, error) => {
        if (error === AUTH_REQUIRED) {
          $state.go('sign-in')
        } else if (error === ALREADY_AUTHENTICATED) {
          $state.go('home')
        } else {
          if (!Meteor.isProduction) {
            $log.log(event, toState.name, toParams, fromState.name, fromParams, error)
          }
        }
      }))
    $urlMatcherFactory.strictMode(false)
  })
  .config(($urlRouterProvider) => {
    $urlRouterProvider
      .when('', '/')
      .otherwise('/not-found')
  })
