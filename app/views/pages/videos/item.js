var View = require('views/base/view');

module.exports = View.extend({
  template: require('views/templates/videos/item'),
  initialize: function() {
    console.log(this.model.get('id'));
    console.log(this.model.attributes);
  },
  render: function() {
    var that = this;

    View.prototype.render.call(this);

    this.$('video').hide().fadeIn();

    _.defer(function(){
      videojs('video-player').ready(function(){
        // Store the video object
        var myPlayer = this;

        // Call the function on resize
        window.onresize = that.resizeVideoJS(myPlayer);
      });
    }, this);

  },

  // responsive video.js
  // http://daverupert.com/2012/05/making-video-js-fluid-for-rwd/
  resizeVideoJS: function(player) {
    console.log(player);
    var width = document
               .getElementById(player.id())
               .parentElement
               .offsetWidth,
        aspectRatio = 9/16;

    return player.width(width).height(width * aspectRatio);
  }
});