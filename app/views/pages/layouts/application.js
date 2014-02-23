var View = require('views/base/view');

module.exports = View.extend({
  container: '#jetclips-container',
  id: 'application-container',
  regions: {
    navigation: 'nav',
    main: '#content-container',
    footer: 'footer'
  },
  template: require('views/templates/layouts/application')
});