/**
 * Tasks state definition.  This is a simple CRUDL implementation, no search
 * paging or sorting.
 *
 * @namespace tasks
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import './add.html'
import { Tasks } from '/imports/api/tasks'
/**
 * Home state controller.
 * @memberof module:/imports/ui/states.home
 */
class AddStateController {
  /**
   * Constructor for the controller.  Assigns injected values as class members.
   */
  constructor ($state) {
    this.state = $state
    this.entry = {}
  }

  add () {
    Tasks.insert(this.entry, () => {
      this.state.go('^.list')
    })
  }
  cancel () {
    this.state.go('^.list')
  }
}

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('tasks.add', {
      controller: AddStateController,
      controllerAs: 'addStateCtrl',
      templateUrl: 'imports/ui/states/tasks/add.html',
      url: '/new'
    })
  })
