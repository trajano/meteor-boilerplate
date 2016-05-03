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
 * There are also two abstract parent states defined: `unauthenticated` and
 * `authenticated` that need to be applied to the top-level states as their
 * `parent`.
 *
 * @module imports/ui/states
 */
import module from './module.js'

// abstract states
import './authenticated'
import './unauthenticated'

// top-level states
import './home'
import './not-found'
import './sign-in'
import './tasks'

export default module.name
