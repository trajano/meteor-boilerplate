/**
 * Client bootstrap module.
 * @module
 */
import 'angular'
import 'angular2-meteor-polyfills'
import '/imports/ui'
import { upgradeAdapter } from '../imports/ui/upgradeAdapter'

upgradeAdapter.bootstrap(document.documentElement, ['ui.app'], {
  strictDi: true
})
