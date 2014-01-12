var View = require('views/base/view');

module.exports = View.extend({
  container: 'div.app-container',
  id: 'site-container',
  regions: {
    header: '#header-container',
    main: '#page-container'
  },
  template: require('../templates/layouts/application')
});
