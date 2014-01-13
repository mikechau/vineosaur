// Application routes.
module.exports = function(match) {
  match('', 'videos#index');
  match('home', 'home#index');
  match('about', 'home#about');
};