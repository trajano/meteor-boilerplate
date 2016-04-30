/**
 * states Angular module definition.
 *
 * The UI Router configuration is performed here.
 * @memberof module:imports/ui/states
 */
import ngUiRouter from 'angular-ui-router'
import uiComponents from '/imports/ui/components'
import { Meteor } from 'meteor/meteor'

/**
 * Authentication required.
 * @type {Symbol}
 * @memberof module:imports/ui/states
 */
export const AUTH_REQUIRED = Symbol()

/**
 * Authenticated already.
 * @type {Symbol}
 * @memberof module:imports/ui/states
 */
export const ALREADY_AUTHENTICATED = Symbol()

export default angular.module('ui.states', [ngUiRouter, uiComponents])
  .run(($rootScope, $log, $urlMatcherFactory, $state) => {
    $rootScope.$on('$destroy', $rootScope.$on('$stateChangeError',
      /**
       * Handle the state change error.  If the error is `AUTH_REQUIRED`,
       * set the state to `sign-in`.  If the error is `ALREADY_AUTHENTICATED`,
       * set the state to `home`.  All other conditions log the state change
       * error details when not running in production.
       *
       * @listens "$stateChangeError"
       * @param {event} event
       * @param {string} toState
       * @param {*} toParams
       * @param {string} fromState
       * @param {*} fromParams
       * @param {*} error
       * @memberof module:imports/ui/states
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

    $rootScope.$on('$destroy', $rootScope.$on('$stateChangeSuccess',
      /**
       * Handle the state change success.  This demostrates changing the page title.
       *
       * @listens "$stateChangeSuccess"
       * @param {event} event
       * @param {string} toState
       * @param {*} toParams
       * @param {string} fromState
       * @param {*} fromParams
       * @param {*} error
       * @memberof module:imports/ui/states
       */
      (event, toState, toParams, fromState, fromParams) => {
        // eslint-disable-next-line no-param-reassign
        $rootScope.pageTitle = toState.name
      }))
    $urlMatcherFactory.strictMode(false)
  })
  .config(($urlRouterProvider) => {
    $urlRouterProvider
      .when('', '/')
      .otherwise('/not-found')
  })
