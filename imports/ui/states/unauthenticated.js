/**
 * Unauthenticated abstract state definition.
 * @module
 */
import module, { ALREADY_AUTHENTICATED } from './module.js'
import { Meteor } from 'meteor/meteor'

// eslint-disable-next-line angular/module-getter
angular.module(module.name)
  .config(($stateProvider) => {
    $stateProvider.state('unauthenticated', {
      abstract: true,
      resolve: {
        currentUser: ($q) => $q((resolve, reject) => {
          if (Meteor.userId() === null) {
            resolve()
          }
          reject(ALREADY_AUTHENTICATED)
        })
      },
      template: '<ui-view></ui-view>'
    })
  })
