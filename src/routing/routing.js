var express = require('express');
var app = express();
var routerexample = require('./route.js');

// metodo de ruta GET
app.get('/get', function (req, res) {
  res.sendfile(__dirname + '/html/get.html');
});

// metodo de ruta POST
app.post('/post', function (req, res) {
  res.sendfile(__dirname + '/html/post.html');
});

app.all('/app', function (req, res, next) {
  console.log('siguiente');
  next(); // pass control to the next handler
});
//Esta vía de acceso de ruta coincidirá con las solicitudes a la ruta raíz
app.get('/html', function (req, res) {
  res.send('aqui app all');
});
//Esta vía de acceso de ruta coincidirá con cualquier valor con una “a” en
//el nombre de la ruta.
app.get(/b/, function(req, res) {
  res.send('cualquier palabra que contenga una b');
});
app.listen(8083);


console.log("Servidor Express escuchando en modo %s", app.settings.env);
