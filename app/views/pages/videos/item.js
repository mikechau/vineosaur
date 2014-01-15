var View = require('views/base/view');

module.exports = View.extend({
  template: require('views/templates/videos/item'),

  render: function() {
    var that = this;

    View.prototype.render.call(this);

    this.$('video').hide().fadeIn();

    // We use defer to load in videojs after the page has been rendered
    // http://stackoverflow.com/questions/9145680/calling-javascript-on-rendering-views-in-backbone-js-post-render-callback
    _.defer(function(){
      videojs('video-player').ready(function(){

        // Store the video object
        var player = this;

        // Initialize the function
        that.resizeVideoJS(player);

        // when the video is resized, call the function again
        window.onresize = function() {
          that.resizeVideoJS(player);
        };

      });
    });

  },

  // responsive video.js
  // http://daverupert.com/2012/05/making-video-js-fluid-for-rwd/
  resizeVideoJS: function(player) {
    var width = document
               .getElementById(player.id())
               .parentElement
               .offsetWidth,
        aspectRatio = 9/16;

    player.width(width).height(width * aspectRatio);
  }

});