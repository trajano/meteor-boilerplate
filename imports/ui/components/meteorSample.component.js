import module from './module.js'
import './meteorSample.html'

/**
 * Meteor Sample component.  When documenting a responsibility just document
 * the class for the whole responsibility so it will appear in the Classes
 * dropdown.
 *
 * The structure of each responsibility is class followed angular module
 * definition.  This will allow migration to Angular2 in the future.
 */
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
