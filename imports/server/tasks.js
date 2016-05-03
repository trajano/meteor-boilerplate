/**
 * 'Tasks' sample collection server implementation.
 *
 * @module /imports/api/tasks
 */
import { Meteor } from 'meteor/meteor'
import { Match, check } from 'meteor/check'
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
Meteor.publish('tasks', function (id) {
  check(id, Match.Maybe(String))
  if (id) {
    return Tasks.find({
      _id: id
    })
  }
  return Tasks.find({})
})
