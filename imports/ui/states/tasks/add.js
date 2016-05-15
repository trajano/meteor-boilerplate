/**
 * Tasks state definition.  This is a simple CRUDL implementation, no search
 * paging or sorting.
 *
 * @module
 */
import module from '../module.js'
import templateUrl from './add.html'
import { Tasks } from '/imports/api/tasks'
/**
 * Tasks add sub-state controller.
 */
class controller {
  /**
   * Constructor for the controller.  Assigns injected values as class members.
   */
  constructor ($state) {
    this.state = $state
    this.entry = {}
  }

  add () {
    Tasks.insertTask(this.entry.text, (err) => {
      if (err) {
        this.error = err
      } else {
        this.state.go('^.list')
      }
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
      controller,
      controllerAs: 'addStateCtrl',
      templateUrl: templateUrl.default,
      url: '/new'
    })
  })
