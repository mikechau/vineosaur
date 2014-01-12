var Controller = require('controllers/base/controller');
var HomePageView = require('views/pages/home/index');
var HomeAboutPageView = require('views/pages/home/about');

module.exports = Controller.extend({
  // beforeAction: function() {
  //   this.constructor.__super__.beforeAction.apply(this, arguments);
  //   this.compose('header', HeaderView, {region: 'header'});
  // },

  index: function() {
    this.view = new HomePageView({region: 'main'});
  },

  about: function() {
    this.view = new HomeAboutPageView({region: 'main'});
  }
});
