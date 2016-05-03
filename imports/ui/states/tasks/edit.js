/**
 * Tasks state definition.  This is a simple CRUDL implementation, no search
 * paging or sorting.
 *
 * @namespace tasks
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import { Meteor } from 'meteor/meteor'
import './edit.html'

/**
 * Home state controller.
 * @memberof module:/imports/ui/states.home
 */
class EditStateController {
  /**
   * Constructor for the controller.  Assigns injected values as class members.
   */
  constructor ($state) {
    this.state = $state
  }

  add () {
this.state.go("^")
  }

  cancel () {
this.state.go("^")
  }

}

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('tasks.edit', {
      controller: EditStateController,
      controllerAs: 'editStateCtrl',
      templateUrl: 'imports/ui/states/tasks/edit.html',
      url: '/:id'
    })
  })
