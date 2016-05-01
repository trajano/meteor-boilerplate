/**
 * Meteor Sample component.
 *
 * AngularJS responsibilities are documented as namespaces that are
 * a member of the ES6 module (not the AngularJS module).
 *
 * The structure of each responsibility is class followed angular module
 * definition.  This will allow migration to Angular2 in the future.
 *
 * @namespace meteorSample
 * @memberof module:/imports/ui/components
 */
import module from './module.js'
import './meteorSample.html'

class MeteorSampleController {
  constructor () {
    angular.noop()
  }
}

angular.module(module.name)
  .component('meteorSample', {
    controller: MeteorSampleController,
    templateUrl: 'imports/ui/components/meteorSample.html'
  })
