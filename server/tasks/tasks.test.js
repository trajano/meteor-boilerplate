import { resetDatabase } from 'meteor/xolvio:cleaner'
import ValidationError from 'meteor/mdg:validation-error'
import { assert, expect } from 'chai'
import { Tasks } from '/imports/api/tasks'
import './insertTask.run'
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

    const result = Tasks.insertTask('hello world')
    const results = Tasks.find({}).fetch()

    expect(results).to.have.lengthOf(1)
    // eslint-disable-next-line no-underscore-dangle
    expect(results[0]._id).to.equal(result)
    expect(results[0].text).to.equal('hello world')
    expect(results[0].secret).to.equal(42)
  })
  it('can fail to add to a collection', () => {
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
    expect(() => Tasks.insertTask()).to.throw(ValidationError.ERROR_CODE)
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
  })
  it('can query an empty collection', () => {
    expect(Tasks.find({}).fetch()).to.have.lengthOf(0)
  })
})
