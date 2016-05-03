/**
 * Tasks state definition.  This is a simple CRUDL implementation, no search
 * paging or sorting.
 *
 * @namespace tasks
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import './main.html'
import './add'
import './edit'
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
    this.subscribe('all-tasks')
    this.helpers({
      entries: () => Tasks.find({})
    })
  }

  add () {
this.state.go('.add')
  }
  edit (id) {
    this.state.go('.edit', { id : id})
  }
}

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('tasks', {
      controller: TasksStateController,
      controllerAs: 'listStateCtrl',
      parent: 'authenticated',
      templateUrl: 'imports/ui/states/tasks/main.html',
      url: '/tasks'
    })
  })
