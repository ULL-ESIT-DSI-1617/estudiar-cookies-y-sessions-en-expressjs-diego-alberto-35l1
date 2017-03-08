var path = require('path');
var repo = require('../package.json').repository.urlgb;
var simpleGit = require('simple-git')(path.resolve('doc'));
var fsp = require('fs-promise');

	fsp.remove(path.resolve('doc/.git'));

	simpleGit.init().add('./*')
         .commit('deploy to gitbook').addRemote('origin', repo).push('--force','origin', 'master:master');

