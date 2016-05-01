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

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('not-found', {
      parent: 'authenticated',
      templateUrl: 'imports/ui/states/not-found/main.html',
      url: '/not-found'
    })
  })
