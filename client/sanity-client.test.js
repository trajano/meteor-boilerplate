import angular from 'angular'
import 'angular-mocks'
import uiStates from '/imports/ui/states'
import ngUiRouter from 'angular-ui-router'
import { assert } from 'chai'
/* eslint-env mocha */
/**
 * @test
 */
describe('sanity test only on client', () => {
  it('has Angular', () => {
    // eslint-disable-next-line angular/window-service
    assert(window.angular, 'Angular does not exist')
  })
  it('has Angular Mock', () => {
    // eslint-disable-next-line angular/window-service
    assert(angular.mock.module, 'Angular mock module does not exists')
    angular.mock.module(uiStates)
    angular.mock.module(($provide) => {
      $provide.factory('$state', () => ({}))
    })
    let mockStateService
    angular.mock.inject(($state) => {
      mockStateService = $state
    })
    assert(mockStateService, 'Angular mock did not get created')
  })
  it('has UI Router', () => {
    assert(ngUiRouter, 'UI Router does not exists')
  })
})
