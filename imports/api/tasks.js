/**
 * 'Tasks' sample collection definition.  There is no `index.js` file
 * in the `api` directory.  The collection definition will include
 * transformations that would apply to both client and server.
 *
 * Validations with `aldeed:collection2` can also be defined in the API
 * layer.
 * @module /imports/api/tasks
 */
import { Mongo } from 'meteor/mongo'
import _ from 'lodash'

class TasksCollection extends Mongo.Collection {
  insert (task, callback) {
    const doc = _.extend({}, task, {
      createdOn: new Date(),
      owner: this.userId
    })
    super.insert(doc, callback)
  }
}

export const Tasks = new TasksCollection('tasks')

// Simple checks to ensure that the user is logged in before making changes.
Tasks.allow({
  insert: (userId, doc) => {
    console.log('userid', userId); return !!userId
  },
  update: (userId, doc, fields, modifier) => !!userId,
  remove: (userId, doc) => !!userId
})
