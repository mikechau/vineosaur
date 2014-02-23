var utils = require('./utils');

var register = function(name, fn) {
  return Handlebars.registerHelper(name, fn);
};

register('with', function(context, options) {
  if (!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(context);
  }
});

register('without', function(context, options) {
  var inverse = options.inverse;
  options.inverse = options.fn;
  options.fn = inverse;
  return Handlebars.helpers['with'].call(this, context, options);
});

register('url', function(routeName) {
  var params = [].slice.call(arguments, 1);
  var options = params.pop();
  return utils.reverse(routeName, params);
});

register('displayPostedBy', function() {
  var poster = '',
      pathname = window.location.pathname;

  switch(pathname) {
    case '/channel/vine':
      poster = '<a href="https://www.facebook.com/BestOfVines">Best Vines</a>';
      break;
    case '/channel/instagram':
      poster = '<a href="https://www.facebook.com/thebestIGvideos">Best Instagram Videos</a>';
      break;
    case '/channel/youtube':
      poster = '<a href="https://www.facebook.com/TheBestYouTubeVideosEver">The best of Youtube</a>';
      break;
    default:
      poster = 'Unknown';
      break;
  }

  return new Handlebars.SafeString(poster);
});