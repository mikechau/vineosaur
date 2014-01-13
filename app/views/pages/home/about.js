var View = require('views/base/view');

module.exports = View.extend({
  autoRender: true,
  className: 'home-about-page',
  template: require('views/templates/home/about'),
  render: function() {

    View.prototype.render.call(this);

   _.defer(function(){
      Holder.run();
    }, this );
    // return this;
  }
});