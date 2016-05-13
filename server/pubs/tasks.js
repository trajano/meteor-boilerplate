/**
 * 'tasks' publication
 *
 * @module
 */
import { Meteor } from 'meteor/meteor'
import { Match, check } from 'meteor/check'
import { Tasks } from '/imports/api/tasks'

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
