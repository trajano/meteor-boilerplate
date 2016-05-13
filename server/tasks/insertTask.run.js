import { Tasks } from '/imports/api/tasks'

/**
 * Insert task method run override.  This is an example of a server
 * only implementation code.  One override per file and named by the
 * method being overriden.
 * @mixin
 */
Tasks.insertTaskMethod.run = (params) => Tasks.insert({
  text: params.text,
  createdOn: new Date(),
  secret: 42
})
