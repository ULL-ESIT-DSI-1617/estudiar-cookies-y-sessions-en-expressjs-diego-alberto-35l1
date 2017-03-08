/*console.log("Ejecución de Github");
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
console.log(stdout); }

exec("git add .", puts);
exec("git commit -m 'commit automático'", puts);
exec("git push origin master", puts);*/

console.log("Commit and push to github master");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Introduzca el mensaje representativo del commit ', (answer) => {
  
  var simpleGit = require('simple-git')();
	simpleGit.add('.')
         .commit(answer).push('origin', 'master');

  console.log('commited!');
  rl.close();
});


