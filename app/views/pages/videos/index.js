var View = require('views/base/view');
var VideoItemSubview = require('views/pages/videos/item');

module.exports = View.extend({
  autoRender: true,
  template: require('views/templates/videos/index'),

  listen: {
    'change model': 'renderSubview'
  },

  events: {
    'click button[name="btn-previous"]': 'previous',
    'click button[name="btn-next"]': 'next'
  },

  container: '.video-container',
  videoMarker: 0,
  numberOfVideos: 0,

  initialize: function() {
    var that = this;

    this.collection.fetch({
      success: function(model, response) {
        that.setVideoModel();
        that.numberOfVideos = that.collection.length;
        that.renderSubview();
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
  },

  previous: function() {
    if (this.videoMarker <= 0) {
      return false;
    }

    this.videoMarker -= 1;
    this.setVideoModel();
  },

  next: function() {
    if (this.videoMarker > this.numberOfVideos) {
      return false;
    }

    this.videoMarker += 1;
    this.setVideoModel();
  },

  setVideoModel: function() {
    var video = this.collection.at(this.videoMarker);
    this.model.set(video.toJSON());
  },

  renderSubview: function() {
    console.log('running');
    var videoSubview = new VideoItemSubview({
      autoRender: true,
      container: this.$('#video-subview-container'),
      model: this.model
    });
    this.subview('videoSubview', videoSubview);
  },

  videoHotkeyControls: function(e) {
    var which = e.which,
        video = this.$('video')[0],
        that = this;
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
  }

});
