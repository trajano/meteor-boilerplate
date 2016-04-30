/**
 * Meteor Sample component.
 *
 * The structure of each responsibility is class followed angular module
 * definition.  This will allow migration to Angular2 in the future.
 *
 * @module
 */
import module from './module.js'
import templateUrl from './meteorSample.html'

import packageJson from '/package.json'

/**
 * Controller class.  This is named 'controller' to allow the use of ES6
 * property shorthand.
 */
class controller {
  constructor () {
    this.packageJson = packageJson
  }
}

angular.module(module.name)
  .component('meteorSample', {
    controller,
    templateUrl
  })
