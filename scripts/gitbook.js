var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
console.log("Ejecución de Gitbook build");
console.log(stdout); }

exec("gitbook build ./doc ./gh-pages", puts);
