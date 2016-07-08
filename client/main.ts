/**
 * Client bootstrap module.
 * @module
 */
import 'angular'
import 'angular2-meteor-polyfills/browser'
import '/imports/ui'
import { uiRouterNgUpgrade } from 'ui-router-ng1-to-ng2'
import { upgradeAdapter } from '../imports/ui/upgradeAdapter'

uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter)
upgradeAdapter.bootstrap(document.documentElement, ['ui.app', 'ui.router.upgrade'], {
  strictDi: true
})
