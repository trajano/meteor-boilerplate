/**
 * Not found state definition.
 *
 * @module imports/ui/states/not-found
 */
import module from '../module.js'
import template from './main.html'

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('not-found', {
      parent: 'authenticated',
      template,
      url: '/not-found'
    })
  })
