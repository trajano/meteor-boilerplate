import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import _ from 'lodash'

/**
 * Extends validated method to require the user to be logged in.
 */
class LoggedInValidatedMethod extends ValidatedMethod {
  /**
   * @param {string} name DDP method name
   * @param {Object} schema SimpleSchema schema
   * @param {Object} options other options for validated method
   */
  constructor (name, schema, options) {
    let mixins = [LoggedInMixin]
    if (Meteor.isTest) {
      mixins = []
    }
    super(_.extend({}, options, {
      name,
      mixins,
      checkLoggedInError: {
        error: 'notLoggedin'
      },
      validate: new SimpleSchema(schema).validator({
        clean: true
      })
    }))
  }
}

export { LoggedInValidatedMethod }
