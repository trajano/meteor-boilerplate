/**
 * 'Tasks' sample collection definition.  There is no `index.js` file
 * in the `api` directory.
 * @module /imports/api/tasks
 */
import { Mongo } from 'meteor/mongo'

export const Tasks = new Mongo.Collection('tasks')
