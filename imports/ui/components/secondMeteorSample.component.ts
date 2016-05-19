/**
 * Angular 2 Meteor Sample component.
 *
 * The structure of each responsibility is class followed angular module
 * definition.  This will allow migration to Angular2 in the future.
 *
 * @module
 */
import { Component } from '@angular/core'
import { MeteorComponent } from 'angular2-meteor'

/**
 * Controller class.  This is named 'controller' to allow the use of ES6
 * property shorthand.
 */
@Component({
  selector: 'second-meteor-sample',
  templateUrl: require('./secondMeteorSample.html').default
})
export class SecondMeteorSampleComponent extends MeteorComponent {
  packageJson: Object
  constructor () {
    super()
    this.packageJson = require('/package.json')
  }
}
