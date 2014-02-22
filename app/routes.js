// Application routes.
module.exports = function(match) {
  match('', 'home#channels');
  match('channels', 'home#channels');
  match('home', 'home#index');
  match('about', 'home#about');

  match('channel/vine', 'videos#vine');
  match('channel/youtube', 'videos#youtube');
  match('channel/instagram', 'videos#instagram');
};