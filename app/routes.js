// Application routes.
module.exports = function(match) {
  match('', 'home#index');
  match('about', 'home#about');
};
