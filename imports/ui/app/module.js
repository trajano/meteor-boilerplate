/**
 * app Angular module definition.  Application global configuration is
 * done here, namely FastClick attachment and disabling debug info on
 * production.
 *
 * This uses the name `module.js` rather than `app.module.js` as each
 * AngularJS module would have a `module.js` and `index.js` it would allow
 * for easier module renames.
 */
import ngAnimate from 'angular-animate'
import ngMeteor from 'angular-meteor'
import ngSanitize from 'angular-sanitize'
import ngUiRouter from 'angular-ui-router'
import { FastClick } from 'fastclick'
import { Meteor } from 'meteor/meteor'

import uiComponents from '/imports/ui/components'
import uiStates from '/imports/ui/states'

export default angular.module('ui.app', [
  ngAnimate,
  ngMeteor,
  ngSanitize,
  ngUiRouter,
  uiComponents,
  uiStates])
  .run(($document) => {
    FastClick.attach($document.body)
  })
  .config(($compileProvider, $locationProvider) => {
    $compileProvider.debugInfoEnabled(!Meteor.isProduction)
    $locationProvider.html5Mode(true)
  })