


var gp = require('gh-pages');
var urlgh = require('../package.json').repository.url;

console.log("Pushing from ./gh-pages to gh-pages branch on github " + urlgh);

gp.publish('./gh-pages', { repo: urlgh, logger: function(m) { console.error(m); } });
