/**
 * Sign in state definition.
 *
 * @module imports/ui/states/sign-in
 */
import module from '../module.js'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import templateUrl from './main.html'

/**
 * Sign in state controller.
 */
class controller {
  /**
   * Registers an onSubmitHook handler on AccountsTemplates to
   * redirect home when the person has signed in or registered successfully.
   *
   * In addition, it will force the initialization of the AccountsTemplates
   * object as the instance being used is different and only gets initialized
   * on startup.
   * @param $state
   */
  constructor ($state) {
    // eslint-disable-next-line no-underscore-dangle
    AccountsTemplates._init()
    AccountsTemplates.options.onSubmitHook = (error, state) => {
      if (!error && (state === 'signIn' || state === 'signUp')) {
        $state.go('home')
      }
    }
  }
}

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('sign-in', {
      controller,
      controllerAs: 'signInStateCtrl',
      parent: 'unauthenticated',
      templateUrl: templateUrl.default,
      url: '/sign-in'
    })
  })
