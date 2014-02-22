var Collection = require('models/base/collection');
var VideoModel = require('models/videos/model');

module.exports = Collection.extend({

  model: VideoModel,

  initialize: function(options) {
    this.url = 'http://jetclips-api.herokuapp.com/api/v1/videos/' + options.id;
  }

});