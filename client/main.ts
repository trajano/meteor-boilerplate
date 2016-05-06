/**
 * Client bootstrap module.
 * @module
 */
import 'angular'
import 'reflect-metadata'
import 'rxjs'
import 'zone.js/dist/zone'
import '/imports/ui'
import { upgradeAdapter } from '../imports/ui/upgradeAdapter'

upgradeAdapter.bootstrap(document.documentElement, ['ui.app'], {
  strictDi: true
})
