var Controller = require('controllers/base/controller');
var VideosCollection = require('models/videos/collection');
var VideoModel = require('models/videos/model');
var VideoView = require('views/pages/videos/index');

module.exports = Controller.extend({


  index: function() {
    var collection = new VideosCollection(),
        model = new VideoModel();
    
    this.view = new VideoView({
      collection: collection,
      model: model,
      region: 'main'
    });
  },

  vine: function() {
    var collection = new VideosCollection({ id: 170901143077174 }),
        model = new VideoModel();

    this.view = new VideoView({
      collection: collection,
      model: model,
      region: 'main'
    });
  },

  youtube: function() {
    var collection = new VideosCollection({ id: 489159771140559 }),
        model = new VideoModel();

    this.view = new VideoView({
      collection: collection,
      model: model,
      region: 'main'
    });
  },

  instagram: function() {
    var collection = new VideosCollection({ id: 526404424081231 }),
        model = new VideoModel();

    this.view = new VideoView({
      collection: collection,
      model: model,
      region: 'main'
    });
  }

});