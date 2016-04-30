/**
 * Client bootstrap module.
 * @module
 */
import angular from 'angular'
import '/imports/ui'

// eslint-disable-next-line angular/document-service
angular.bootstrap(document.documentElement, ['ui.app'], {
  strictDi: true
})
