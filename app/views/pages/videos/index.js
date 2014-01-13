var View = require('views/base/view');
var VideoItemSubview = require('views/pages/videos/item');

module.exports = View.extend({
  autoRender: true,
  template: require('views/templates/videos/index'),

  listen: {
    // 'change model': 'render',
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
    console.log('click');
    if (this.videoMarker <= 0) {
      return false;
    }

    this.videoMarker -= 1;
    this.setVideoModel();
  },

  next: function() {
    console.log('click');
    if (this.videoMarker > this.numberOfVideos) {
      return false;
    }

    this.videoMarker += 1;
    this.setVideoModel();
  },

  setVideoModel: function() {
    console.log('sets');
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
    console.log(e);
  }

});
