/* global Package */
Package.describe({
  name: 'broilerplate:broilerplate-client',
  summary: 'broilerplate Client',
  version: '1.0.0'
})
Package.onUse(function (api) {
  api.use(['ecmascript',
    'blaze-html-templates',
    'broilerplate:broilerplate-model'],
    'client')
  api.mainModule('main.js', 'client')
})
