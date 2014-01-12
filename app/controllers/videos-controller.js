// var Controller = require('controllers/base/controller');
// var Videos = require('collections/videos');
// var Video = require('models/video');
// var VideosView = require('views/videos/all');
// var VideoView = require('views/videos/single');

// module.exports = Controller.extend({

//   // beforeAction: function() {
//   //   this.compose('videos', Videos, { region: 'main' });

//   //   var collection = this.compose('videos', Videos, { region: 'main' });
//   //   console.log(collection);

//   //   if (!collection.length) {
//   //     collection.fetch();
//   //   }
//   // },

//   index: function() {
//     // var collection = this.compose('videos', Videos);
//     // console.log(collection);
//     // if(!this.disposed) {
//       var collection = new Videos();
//       var video = new Video();
//       collection.fetch({
//         success: function() {
//       this.view = new VideoView({ collection: collection, region: 'main' });

//           console.log('works');
//         }
//       });
//     // }
//   },

//   show: function(params) {
//     var collection = this.compose('videos', Videos);
//     var model = collection.get('params.id');
//     if (!this.disposed) {
//       this.view = new VideoView({ model: model });
//     }
//   }

// });