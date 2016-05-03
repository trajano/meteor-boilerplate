/**
 * 'Tasks' sample collection server implementation.
 *
 * @module /imports/api/tasks
 */
import { Tasks } from '/imports/api/tasks'
Tasks.rawCollection().createIndex({
  text: 1
})
