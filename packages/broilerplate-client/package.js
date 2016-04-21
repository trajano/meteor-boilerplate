Package.describe({
  name: 'broilerplate:broilerplate-client',
  summary: 'broilerplate Client',
  version: '1.0.0'
})
Package.onUse(function(api) {
  api.use(['ecmascript', 'blaze-html-templates'], 'client')
  api.mainModule('main.js', 'client')
})
