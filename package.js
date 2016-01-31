Package.describe({
  summary: 'React integration for Space',
  name: 'space:react',
  version: '0.1.0',
  git: 'https://github.com/meteor-space/react.git'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'underscore',
    'ecmascript',
    'react',
    'space:base@4.0.0',
    'space:messaging@3.0.0',
    'space:ui@6.0.0'
  ]);

  api.addFiles([
  ], 'client');

});

Package.onTest(function(api) {

  api.use([
    'ecmascript',
    'space:react',
    'practicalmeteor:munit@2.1.5',
    'space:base@4.0.0',
    'space:ui@6.0.0',
    'space:testing@3.0.1'
  ]);

  api.addFiles([
    'tests/component.tests.js'
  ], 'client');

});
