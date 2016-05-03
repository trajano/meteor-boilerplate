import { Meteor } from 'meteor/meteor'
import { resetDatabase } from 'meteor/xolvio:cleaner'
import { assert, expect } from 'chai'
import { Tasks } from '/imports/api/tasks'
import sinon from 'sinon'
/* eslint-env mocha */
/**
 * Collection tests.  This can only be done on the server side because of access control.
 * @test
 */
describe('collection test', () => {
  beforeEach(() => {
    resetDatabase()
  })
  it('can see a collection', () => {
    assert(Tasks, 'unable to see sample collection')
  })
  it('can query an empty collection', () => {
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
  })
  it('fails to add to a collection when the user is not logged in', (done) => {
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
    Tasks.insert({
      text: 'hello world'
    }, (error) => {
      assert(error)
      expect(error.error).not.equal(404)
      done()
    })
  })

  describe('logged in', () => {
    let sandbox
    beforeEach(() => {
      sandbox = sinon.sandbox.create()
      sandbox.stub(Meteor, 'userId').returns(42)
    })
    afterEach(() => {
      sandbox.restore()
    })
    it('can add to a collection', (done) => {
      expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
      Tasks.insert({
        text: 'hello world'
      }, (error, id) => {
        assert(!error)
        const results = Tasks.find({}).fetch()
        expect(results).to.have.lengthOf(1)
        expect(results[0].defaultValue).to.equal(42)
        expect(results[0].id).to.equal(id)
        expect(results[0].createdOn).to.not.be.at.most(new Date())
        done()
      })
    })
  })
})
