var ApplicationView = require('views/layouts/application');
var NavigationView = require('views/layouts/navigation');

module.exports = Chaplin.Controller.extend({
  // Compositions persist stuff between controllers.
  // You may also persist models etc.
  // beforeAction: function() {
  //   return this.compose('site', SiteView);
  // },

  beforeAction: function() {
    this.compose('application', ApplicationView);
    this.compose('navigation', NavigationView, {region: 'navigation'});
  },
});
