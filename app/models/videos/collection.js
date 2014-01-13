var Collection = require('models/base/collection');
var VideoModel = require('models/videos/model');

module.exports = Collection.extend({

  model: VideoModel,

  url: 'http://localhost:3000/api/v1/videos'

});