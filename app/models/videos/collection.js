var Collection = require('models/base/collection');
var VideoModel = require('models/videos/model');

module.exports = Collection.extend({

  model: VideoModel,

  url: 'http://vinetime.herokuapp.com/api/v1/videos'

});