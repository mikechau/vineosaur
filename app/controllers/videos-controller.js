var Controller = require('controllers/base/controller');
var VideosCollection = require('models/videos/collection');
var VideoModel = require('models/videos/model');
// var VideosCollectionView = require('views/pages/videos/collection');
var VideoView = require('views/pages/videos/index');

module.exports = Controller.extend({

//   // beforeAction: function() {
//   //   this.compose('videos', Videos, { region: 'main' });

//   //   var collection = this.compose('videos', Videos, { region: 'main' });
//   //   console.log(collection);

//   //   if (!collection.length) {
//   //     collection.fetch();
//   //   }
//   // },

  index: function() {
    // var collection = this.compose('videos', Videos);
    // console.log(collection);
    // if(!this.disposed) {
      // var collection = new Videos();
      // var video = new Video();
      // collection.fetch({
      //   success: function() {
      // this.view = new VideoView({ collection: collection, region: 'main' });

      //     console.log('works');
      //   }
      // });
    // }
    var collection = new VideosCollection(),
        model = new VideoModel();
    
    this.view = new VideoView({ 
      collection: collection,
      model: model,
      region: 'main'
    });
    // collection.fetch({success: function() {
    //   console.log('test');
    // }});
  },

//   show: function(params) {
//     var collection = this.compose('videos', Videos);
//     var model = collection.get('params.id');
//     if (!this.disposed) {
//       this.view = new VideoView({ model: model });
//     }
//   }

});