var SiteView = require('views/layouts/application');
var HeaderView = require('views/layouts/header');

module.exports = Chaplin.Controller.extend({
  // Compositions persist stuff between controllers.
  // You may also persist models etc.
  // beforeAction: function() {
  //   return this.compose('site', SiteView);
  // },

  beforeAction: function() {
    this.compose('site', SiteView);
    this.compose('header', HeaderView, {region: 'header'});
  },
});
