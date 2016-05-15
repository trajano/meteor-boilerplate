/**
 * Not found state definition.
 *
 * @module imports/ui/states/not-found
 */
import module from '../module.js'
import templateUrl from './main.html'

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('not-found', {
      parent: 'authenticated',
      templateUrl: templateUrl.default,
      url: '/not-found'
    })
  })
