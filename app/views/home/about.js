var View = require('views/base/view');

module.exports = View.extend({
  autoRender: true,
  className: 'home-about-page',
  template: require('../templates/home/about'),
  render: function() {
    View.prototype.render.call(this);
    console.log('test');
  }
});
