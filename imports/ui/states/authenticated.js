/**
 * Authenticated abstract state definition.
 * @module
 */
import module, { AUTH_REQUIRED } from './module.js'
import { Meteor } from 'meteor/meteor'

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('authenticated', {
      abstract: true,
      resolve: {
        currentUser: ($q) => $q((resolve, reject) => {
          if (Meteor.userId() === null) {
            reject(AUTH_REQUIRED)
          }
          resolve(Meteor.userId())
        })
      },
      template: '<ui-view></ui-view>'
    })
  })
