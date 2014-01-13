var View = require('views/base/view');
var VideoItemSubview = require('views/pages/videos/item');

module.exports = View.extend({
  autoRender: true,
  template: require('views/templates/videos/index'),

  listen: {
    // 'change model': 'render',
    'change videoMarker': 'setVideoModel'
  },

  container: '.video-container',
  videoMarker: 0,
  numberOfVideos: 0,

  initialize: function() {
    var that = this;
    this.collection.fetch({
      success: function(model, response) {
        console.log(model.toJSON());
        that.setVideoModel();
        that.numberOfVideos = that.collection.length;
        that.renderSubview();
      }
    });
  },

  render: function() {
    View.prototype.render.call(this);
    console.log(this.model);
    console.log(this.numberOfVideos);
  },

  previous: function() {
    if (this.videoMarker < 0) {
      return false;
    }

    this.videoMarker -= 1;
  },

  next: function() {
    if (this.videoMarker > this.numberOfVideos) {
      return false;
    }

    this.videoMarker += 1;
  },

  setVideoModel: function() {
    var video = this.collection.at(this.videoMarker);
    this.model.set(video.toJSON());
  },

  renderSubview: function() {
    var videoSubview = new VideoItemSubview({
      autoRender: true,
      container: this.$('#video-subview-container'),
      model: this.model
    });
    this.subview('videoSubview', videoSubview);
  }

});
