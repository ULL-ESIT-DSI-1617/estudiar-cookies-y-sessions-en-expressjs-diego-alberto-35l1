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


//sessions

gulp.task('management',shell.task([
  'node cookie_management/cookie_management.js'
])
);

gulp.task('cookie_module',shell.task([
  'node cookie_module/cookie_module.js'
])
);

gulp.task('auth',shell.task([
  'node session_auth/session_auth.js'
])
);
