import angular from 'angular'
import 'angular-mocks'
import uiStates from '/imports/ui/states'
import { assert, expect } from 'chai'
import sinon from 'sinon'
import { Meteor } from 'meteor/meteor'
/* eslint-env mocha */
/**
 * @test
 */
describe(uiStates, () => {
  let sandbox,
    $state,
    $location,
    $rootScope

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  function goTo (url) {
    $location.url(url)
    $rootScope.$digest()
  }

  beforeEach(angular.mock.module(uiStates, ($provide) => {
    // Mock the $templateCache
    $provide.factory('$templateCache', () => ({
      get: (x) => x
    }))
  }))

  beforeEach(angular.mock.inject((_$state_, _$location_, _$rootScope_) => {
    $state = _$state_
    $location = _$location_
    $rootScope = _$rootScope_
  }))

  it('has state', () => {
    assert($state, '$state does not exist')
  })

  it('should go to the sign-in state', () => {
    goTo('')
    expect($state.current.name).to.equal('sign-in')
  })

  it('should go to the home state when user is logged in', () => {
    sandbox.stub(Meteor, 'userId').returns('42')
    goTo('')
    expect($state.current.name).to.equal('home')
  })

  it('should go to the sign-in state again', () => {
    goTo('')
    expect($state.current.name).to.equal('sign-in')
  })
})
