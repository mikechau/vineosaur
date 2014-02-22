var Controller = require('controllers/base/controller');
var HomePageView = require('views/pages/home/index');
var HomeAboutPageView = require('views/pages/home/about');
var HomeChannelsPageView = require('views/pages/home/channels');

module.exports = Controller.extend({

  index: function() {
    this.view = new HomePageView({region: 'main'});
  },

  about: function() {
    this.view = new HomeAboutPageView({region: 'main'});
  },

  channels: function() {
    this.view = new HomeChannelsPageView({region: 'main'});
  }
});
