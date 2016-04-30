/**
 * Main Angular application module definition.  This is the entry point
 * to the rest of the modules in this folder.
 *
 * Application dependencies, namely core AngularJS dependencies and internal
 * application dependencies are declared here.
 *
 * Application global configuration is done here, namely disabling debug info
 * on production and enabling HTML5 mode.
 *
 * There are no exports on this file.
 *
 * @module imports/ui
 */
import ngAnimate from 'angular-animate'
import ngMeteor from 'angular-meteor'
import ngMeteorAuth from 'angular-meteor-auth'
import ngSanitize from 'angular-sanitize'
import { Meteor } from 'meteor/meteor'

import uiComponents from '/imports/ui/components'
import uiStates from '/imports/ui/states'

angular.module('ui.app', [
  ngAnimate,
  ngMeteor,
  ngMeteorAuth,
  ngSanitize,
  uiComponents,
  uiStates])
  .config(($compileProvider, $locationProvider) => {
    $compileProvider.debugInfoEnabled(!Meteor.isProduction)
    $locationProvider.html5Mode(true)
  })
