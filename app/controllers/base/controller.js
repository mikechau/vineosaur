var ApplicationView = require('views/pages/layouts/application');
var NavigationView = require('views/pages/layouts/navigation');
var FooterView = require('views/pages/layouts/footer');

module.exports = Chaplin.Controller.extend({
  // Compositions persist stuff between controllers.
  // You may also persist models etc.
  // beforeAction: function() {
  //   return this.compose('site', SiteView);
  // },

  beforeAction: function() {
    this.compose('application', ApplicationView);
    this.compose('navigation', NavigationView, {region: 'navigation'});
    this.compose('footer', FooterView, {region: 'footer'});
  },
});