/* globals Package */
Package.describe({
  name: 'trajano:linters',
  version: '1.0.0',
  summary: 'This runs the known linters.',
  documentation: 'README.md'
})

Package.registerBuildPlugin({
  name: 'linters',
  sources: [
    'linters.js'
  ],
  use: ['ecmascript', 'underscore']
})

// eslint-disable-next-line prefer-arrow-callback
Package.onUse(function onUse (api) {
  api.use('isobuild:linter-plugin@1.0.0')
})
