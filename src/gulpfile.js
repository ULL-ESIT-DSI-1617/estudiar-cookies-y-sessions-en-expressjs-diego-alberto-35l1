var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function() {
console.log("Prueba default");
});


gulp.task('basic-routing',shell.task([
  'node basic-routing/basfic-routing.js'
])
);


gulp.task('middleware',shell.task([
  'node middleware/middleware.js'
])
);

gulp.task('server',shell.task([
  'node middleware/server.js'
])
);

gulp.task('routing',shell.task([
  'nodejs routing/routing.js'
])
);
 
gulp.task('router',shell.task([
  'nodejs router/route.js'
])
);
