/**
 * This provides one export: `upgradeAdapter` which is used to build a hybrid
 * Angular1+Angular2 application reducing the need to fully change to Angular2
 * all at once.
 * 
 * @module /imports/ui/upgradeAdapter
 */
import { UpgradeAdapter } from '@angular/upgrade'
export const upgradeAdapter = new UpgradeAdapter()
