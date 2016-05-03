/**
 * Tasks state definition.  This is a simple CRUDL implementation, no search
 * paging or sorting.
 *
 * @namespace tasks
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import { Meteor } from 'meteor/meteor'
import './main.html'

/**
 * Home state controller.
 * @memberof module:/imports/ui/states.home
 */
class AddStateController {
  /**
   * Constructor for the controller.  Assigns injected values as class members.
   */
  constructor($state) {
    this.state = $state
  }

  /**
   * Sign out action.
   */
  signOut() {
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
    $stateProvider.state('tasks.add', {
      controller: AddStateController,
      controllerAs: 'addStateCtrl',
      parent: 'authenticated',
      templateUrl: 'imports/ui/states/tasks/main.html',
      url: '/new'
    })
  })
