var View = require('views/base/view');

module.exports = View.extend({
  autoRender: true,

  className: 'channels-page',

  template: require('views/templates/home/channels'),

  initialize: function() {
    this.clearVideoJS();
    this.clearKeydownEvents();
  }
});