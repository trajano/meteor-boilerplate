import { Meteor } from 'meteor/meteor'
import { resetDatabase } from 'meteor/xolvio:cleaner'
import { assert, expect } from 'chai'
import { Tasks } from '/imports/api/tasks'
/* eslint-env mocha */
/**
 * Collection tests.  This can only be done on the server side because client
 * tests do not have access to the MongoDB collection itself.  Note that
 * the operations will be done with a `userId = undefined` as these are run
 * in the server context.  
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
  it('can add to a collection', () => {
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
    const id = Tasks.insert({
      text: 'hello world'
    })

    const results = Tasks.find({}).fetch()
    expect(results).to.have.lengthOf(1)
    expect(results[0].defaultValue).to.equal(42)
    expect(results[0].id).to.equal(id)
    assert(results[0].createdOn <= new Date())
  })
})
