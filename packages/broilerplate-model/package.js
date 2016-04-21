/* global Package */
Package.describe({
  name: 'broilerplate:broilerplate-model',
  summary: 'broilerplate Data Model',
  version: '1.0.0'
})
Package.onUse(function (api) {
  api.use(['ecmascript'])
  api.mainModule('main.js')
})
