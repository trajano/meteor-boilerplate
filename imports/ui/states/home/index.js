/**
 * Home state definition.
 *
 * Top-level states are implemented in `index.js` to reduce the amount of
 * typing needed for each state.  Child-states such as "edit" or "add" states
 * are managed in the same folder and imported here.
 *
 * The eslint is disabled for the angular.module line as there is a false
 * positive.
 *
 * Each state is tagged as a namespace with the state name and a member of
 * {@link module:imports/ui/states}.
 *
 * @module imports/ui/states/home
 */
import module from '../module.js'
import { Meteor } from 'meteor/meteor'
import templateUrl from './main.html'

/**
 * Home state controller.
 */
class controller {
  /**
   * Constructor for the controller.  Assigns injected values as class members.
   */
  constructor ($state) {
    this.state = $state
  }

  /**
   * Sign out action.
   */
  signOut () {
    Meteor.logout((error) => {
      if (!error) {
        this.state.go('sign-in')
      }
    })
  }
}

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('home', {
      controller,
      controllerAs: 'homeStateCtrl',
      parent: 'authenticated',
      templateUrl: templateUrl.default,
      url: '/'
    })
  })
