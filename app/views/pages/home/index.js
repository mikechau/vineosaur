var View = require('views/base/view');

module.exports = View.extend({
  autoRender: true,
  className: 'home-page',
  template: require('views/templates/home/index'),
  render: function() {
    View.prototype.render.call(this);
    console.log('test');
  }
});