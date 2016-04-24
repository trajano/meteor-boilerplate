if (Meteor.isServer) {
  require('/imports/server')
} else {
  require('/imports/ui')
}
