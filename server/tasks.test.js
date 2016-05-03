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
  it('can add to a collection', () => {
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
    const result = Tasks.insert({
      text: 'hello world'
    })

    const results = Tasks.find({}).fetch()
    expect(results).to.have.lengthOf(1)
    // eslint-disable-next-line no-underscore-dangle
    expect(results[0]._id).to.equal(result)
    expect(results[0].text).to.equal('hello world')
  })
  it('can query an empty collection', () => {
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
  })
})
