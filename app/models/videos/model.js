var Model = require('models/base/model');

module.exports = Model.extend({

  // urlRoot: 'http://localhost:3000/api/v1/video'
  defaults: {
    source: "",
    id: null,
    name: "",
    ts: ""
  }

});