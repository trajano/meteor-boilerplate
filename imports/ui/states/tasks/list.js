/**
 * Tasks state definition.  This is a simple CRUDL implementation, no search
 * paging or sorting.
 *
 * @namespace tasks
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import './list.html'
import { Tasks } from '/imports/api/tasks'

/**
 * List state controller.
 * @memberof module:/imports/ui/states.tasks
 */
class TasksStateController {
  /**
   * Constructor for the controller.  Assigns injected values as class members.
   */
  constructor ($state, $reactive, $scope) {
    $reactive(this).attach($scope)
    this.state = $state
    this.subscribe('tasks')
    this.helpers({
      entries: () => Tasks.find({})
    })
  }

  add () {
    this.state.go('^.add')
  }
  edit (id) {
    this.state.go('^.edit', {
      id
    })
  }
  delete (id) {
    Tasks.remove(id)
  }
}

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('tasks.list', {
      controller: TasksStateController,
      controllerAs: 'listStateCtrl',
      templateUrl: 'imports/ui/states/tasks/list.html',
      url: ''
    })
  })
