/**
 * 'Tasks' sample collection server implementation.
 *
 * @module /imports/api/tasks
 */
import { Meteor } from 'meteor/meteor'
import { Tasks } from '/imports/api/tasks'
import _ from 'lodash'

Tasks.rawCollection().ensureIndex({
  text: 1
}, _.noop)

// Simple checks to ensure that the user is logged in before making changes.
Tasks.allow({
  insert: (userId, doc) => !!userId,
  update: (userId, doc, fields, modifier) => !!userId,
  remove: (userId, doc) => !!userId
})

// eslint-disable-next-line prefer-arrow-callback, func-names
Meteor.publish('all-tasks', function () {
  return Tasks.find({})
})
