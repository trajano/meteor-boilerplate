/**
 * Home state definition.
 *
 * Top-level states are implemented in `index.js` to reduce the amount of
 * typing needed for each state.  Child-states such as "edit" or "add" states
 * are managed in the same folder and imported here.
 *
 * The eslint is disabled for the angular.module line as there is a false
 * positive.
 */
import module from '../module.js'
import './main.html'

class HomeStateController {
  /**
   * Constructor for the controller.
   */
  constructor () {
    angular.noop()
  }
}
// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('home', {
      controller: HomeStateController,
      controllerAs: 'homeStateCtrl',
      parent: 'authenticated',
      templateUrl: 'imports/ui/states/home/main.html',
      url: '/'
    })
  })
