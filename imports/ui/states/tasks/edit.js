/**
 * Tasks edit sub state definition.  This is not reactive.
 *
 * @namespace tasks
 * @memberof module:/imports/ui/states
 */
import module from '../module.js'
import { Meteor } from 'meteor/meteor'
import './edit.html'
import { Tasks } from '/imports/api/tasks'

/**
 * Tasks edit sub-state controller.
 * @memberof module:/imports/ui/states.home
 */
class EditStateController {
  /**
   * Constructor for the controller.  Assigns injected values as class members.
   */
  constructor ($state, $stateParams, entry) {
    this.state = $state
    this.entry = entry
    this.id = $stateParams.id
  }

  save () {
    Tasks.update(this.id, {
      $set: {
        text: this.entry.text
      }
    }, () => {
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
    $stateProvider.state('tasks.edit', {
      controller: EditStateController,
      controllerAs: 'editStateCtrl',
      resolve: {
        entry: ($stateParams, $q) => $q((resolve, reject) => {
          let resolved = false
          const h = Meteor.subscribe('tasks', $stateParams.id,
            {
              onReady: () => {
                resolve(Tasks.findOne($stateParams.id))
                resolved = true
                h.stop()
              },
              onStop: (error) => {
                if (!resolved) {
                  reject(error)
                }
              }
            }
          )
        })
      },
      templateUrl: 'imports/ui/states/tasks/edit.html',
      url: '/:id'
    })
  })
