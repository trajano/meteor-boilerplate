/**
 * Module to ensure the indexes are created on collections.
 * @module
 */
import { Meteor } from 'meteor/meteor'
import { Tasks } from '/imports/api/tasks'
import _ from 'lodash'

Meteor.startup(() => {
  Tasks.rawCollection().ensureIndex({
    text: 1
  }, _.noop)
})

// Deny all client mutator methods
Tasks.deny({
  insert: () => false,
  remove: () => false,
  update: () => false
})
