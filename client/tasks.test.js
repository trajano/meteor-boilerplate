import { Meteor } from 'meteor/meteor'
import { resetDatabase } from 'meteor/xolvio:cleaner';
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
    expect(Tasks.find({}).fetch()).to.be.empty
  })
  it('fails to add to a collection when the user is not logged in', (done) => {
    expect(Tasks.find({}).fetch()).to.be.empty
    Tasks.insert({
      text: 'hello world'
    }, (error) => {
      console.log('expected', error)
      assert(error)
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
      expect(Tasks.find({}).fetch()).to.be.empty
      Tasks.insert({
        text: 'hello world'
      }, (error, _id) => {
        console.log(error)
        assert(!error)
        const results = Tasks.find({}).fetch()
        expect(results).to.have.lengthOf(1)
        expect(results[0].defaultValue).to.equal(42)
        expect(results[0]._id).to.equal(_id)
        expect(results[0].createdOn).to.not.be.undefined
        done()
      })
    })
  })
})
