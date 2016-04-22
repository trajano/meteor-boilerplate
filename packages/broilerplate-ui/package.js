/* global Package */
Package.describe({
  name: 'broilerplate:broilerplate-ui',
  summary: 'broilerplate UI',
  version: '1.0.0'
})
Package.onUse(function (api) {
  api.use(['ecmascript',
    'broilerplate:broilerplate-model'],
    'client')
  api.mainModule('main.js', 'client')
})
