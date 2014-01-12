exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(?!app)/
      order:
        before: [
          'bower_components/console-polyfill/index.js',
          'bower_components/jquery/jquery.js',
          'bower_components/lodash/dist/lodash.compat.js',
          'bower_components/backbone/backbone.js',
          'bower_components/chaplin/chaplin.js',
          'bower_components/sass-boostrap3/dist/js/bootstrap.js'
        ]

    stylesheets:
      defaultExtension: 'scss'
      joinTo:
        'stylesheets/app.css': /^app/
        'stylesheets/vendor.css': /^(?!app)/
      order:
        before: [
          'bower_components/sass-boostrap3/dist/css/bootstrap.css',
          'app/views/scss/application.scss'
        ]

    templates:
      joinTo: 'javascripts/app.js'

  plugins:
    sass:
      debug: 'comments'