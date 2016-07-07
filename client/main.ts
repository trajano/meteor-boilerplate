/**
 * Client bootstrap module.
 * @module
 */
import 'angular'
import '/imports/ui'
import { upgradeAdapter } from '../imports/ui/upgradeAdapter'

upgradeAdapter.bootstrap(document.documentElement, ['ui.app'], {
  strictDi: true
})
