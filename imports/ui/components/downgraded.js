import angular from 'angular'
import { SecondMeteorSampleComponent } from './secondMeteorSample.component.ts'
import { upgradeAdapter } from '../upgradeAdapter.ts'

angular.module('ui.components')
  .directive('secondMeteorSample',
    upgradeAdapter.downgradeNg2Component(SecondMeteorSampleComponent))
