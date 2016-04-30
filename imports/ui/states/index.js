/**
 * UI states module.
 *
 * Angular UI Router states are defined in this module.  The `module.js` file
 * contains the general configuration of UI router including the `$rootScope`
 * event handlers.
 *
 * Each top-level state is in its own directory with an `index.js` defining
 * the state controller and the $stateProvider configuration.  This allows
 * each state to be isolated and remove the need for a global route
 * configuration.
 *
 * @module /imports/ui/states
 */
import module from './module.js'
import './home'
import './not-found'
export default module.name
