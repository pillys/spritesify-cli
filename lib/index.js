var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var runPath = path.normalize(argv._.concat(['./'])[0]);
var cssPath = path.normalize(argv.o || './sprites.css');
var urlFix = argv.u || './';

var Spritesify = require('spritesify');
var spritesify = new Spritesify(runPath, urlFix);
spritesify.css(runPath, cssPath, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('done');
  }
});