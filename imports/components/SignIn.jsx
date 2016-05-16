import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { AccountsTemplates } from 'meteor/useraccounts:core'
import home from '/imports/routes/home'
// eslint-disable-next-line no-unused-vars
import Blaze from 'meteor/gadicc:blaze-react-component'

class SignIn extends React.Component {
  componentDidMount () {
    AccountsTemplates.options.onSubmitHook = (error, state) => {
      if (!error && (state === 'signIn' || state === 'signUp')) {
        FlowRouter.go(home)
      }
    }
  }
  render () {
    return <div>
             <Blaze template='atForm' />
           </div>
  }
}

export default createContainer(() => ({}), SignIn)
