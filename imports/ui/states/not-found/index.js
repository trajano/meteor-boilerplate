/**
 * Not found state definition.
 *
 * @namespace not-found
 * @memberof module:/imports/ui/states
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
