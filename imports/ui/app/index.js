/**
 * app module.
 *
 * For every module directory there should be an `index.js` file
 * like this one and a `module.js`.  This file is responsible
 * for loading all the responsibilities of the AngularJS module
 * and exporting itself with the AngularJS module name.
 *
 * @module /imports/ui/app
 */
import module from './module.js'

/**
 * AngularJS module name.  For all AngularJS ES6 modules, the
 * pattern is to always export the name of the module by default.
 */
export default module.name
