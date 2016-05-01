/**
 * Sign in state definition.
 *
 * @namespace sign-in
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import './main.html'

/**
 * Sign in state controller.
 * @memberof module:/imports/ui/states.sign-in
 */
class SignInStateController {
  /**
   * Registers an onSubmitHook handler on AccountsTemplates to
   * redirect home when the person has signed in or registered successfully
   * @param $state
   */
  constructor ($state) {
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
      controller: SignInStateController,
      controllerAs: 'signInStateCtrl',
      parent: 'unauthenticated',
      templateUrl: 'imports/ui/states/sign-in/main.html',
      url: '/sign-in'
    })
  })
