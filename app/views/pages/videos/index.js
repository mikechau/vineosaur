var View = require('views/base/view'),
    VideoMetadataSubView = require('views/pages/videos/info');

module.exports = View.extend({
  autoRender: true,
  template: require('views/templates/videos/index'),

  listen: {
    'change model': 'updateVideoSource'
  },

  events: {
    'click button[name="btn-previous"]': 'previous',
    'click button[name="btn-next"]': 'next',
    'click button.endless-disabled': 'enableEndlessMode',
    'click button.endless-enabled': 'disableEndlessMode'
  },

  container: '.video-container',
  videoMarker: 0,
  numberOfVideos: 0,

  initialize: function() {
    var that = this;

    this.collection.fetch({
      success: function(model, response) {
        // we subtract from 1 because arrays start from 0
        that.numberOfVideos = that.collection.length - 1;
        that.setVideoModel();
      }
    });

    $(document).on("keydown", function(e) {
      e.preventDefault();
      that.videoHotkeyControls(e);
    });
  },

  render: function() {
    var that = this;

    View.prototype.render.call(this);

    this.$('video').hide().fadeIn();

    _.defer(function(){
      videojs('video-player').ready(function() {

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

  renderVideoMetadataSubview: function() {
   var videoSubview = new VideoMetadataSubView({
      autoRender: true,
      container: this.$('#video-subview-container'),
      model: this.model
    });

    this.subview('videoSubview', videoSubview);
  },

  previous: function() {
    if (this.videoMarker <= 0) {
      this.videoMarker = this.numberOfVideos;
    } else {
      this.videoMarker -= 1;
    }

    this.setVideoModel();
  },

  next: function() {
    if (this.videoMarker >= this.numberOfVideos) {
      this.videoMarker = 0;
    } else {
      this.videoMarker += 1;
    }

    this.setVideoModel();
  },

  setVideoModel: function() {
    var video = this.collection.at(this.videoMarker);
    this.model.set(video.toJSON());
  },

  updateVideoSource: function() {
    this.$('video')[0].src = this.model.get('source');
    this.renderVideoMetadataSubview();
  },

  videoHotkeyControls: function(e) {
    var which = e.which,
        video = this.$('video')[0];

    switch(which) {
      case 32:
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        break;
      case 37:
        this.previous();
        break;
      case 39:
        this.next();
        break;
      default:
        return false;
    }
  },

  enableEndlessMode: function(e) {
    this.toggleEndlessModeButton(e.target);
    this.$(e.target).text('Turn Off Endless Mode');

    var that = this,
        vjs = videojs('video-player');

    this.videoEndlessModeEvent(vjs);
    this.playNext(vjs);
  },

  disableEndlessMode: function(e) {
    this.toggleEndlessModeButton(e.target);
    this.$(e.target).text('Turn On Endless Mode');

    videojs('video-player').off('ended');
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
  },

  toggleEndlessModeButton: function(target) {
    this.$(target).toggleClass('endless-disabled endless-enabled');
  },

  playNext: function(vjs) {
    var that = this;
    if (vjs.currentTime() === vjs.duration()) {
      that.next();
    }
  },

  videoEndlessModeEvent: function(vjs) {
    var that = this;
    vjs.on('ended', function() {
      that.next();
    });
  }

});
