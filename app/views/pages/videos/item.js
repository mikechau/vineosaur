var View = require('views/base/view');

module.exports = View.extend({
  template: require('views/templates/videos/item'),
  initialize: function() {
    console.log(this.model.get('id'));
    console.log(this.model.attributes);
  },
  render: function() {
    View.prototype.render.call(this);
    this.$('video').hide().fadeIn();
    _.defer(function(){
      videojs('video-player');
    }, this);
  }
});