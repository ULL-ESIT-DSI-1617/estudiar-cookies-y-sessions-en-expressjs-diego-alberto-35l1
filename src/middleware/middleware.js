var app = require('express')();

app.use(function(req,res,next){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("Petición http con ip remota: " + ip);
  res.write('<h1 style="color:green"> Tu IP es: ' + ip + '</h1>');
  next();
});

app.all('/parametro/:id', function (req, res, next) {
  res.write('<h1> Respuesta 1º middleware con parámetro :id -> '+ req.params.id +' </h1>');
  res.end();
})

app.all('/', function (req, res, next) {
  res.write('<h1> Respuesta 2º middleware </h1>');
  next();
})

app.get('/', function (req, res, next) {
  res.write('<h1> Esta es una peticion get </h1>');
  res.end();
})

app.post('/', function (req, res, next) {
  res.write('<h1> Esta es una peticion post </h1>');
  res.end();
})

app.get('/hola', function (req, res, next) {
  res.write('<h1 style="color:red"> HOLA </h1>');
  res.end();
})

app.use(function(err, req, res, next) {
  res.status(500).send('Algo no ha ido bien!');
});
/*
app.use(function(req, res, next) {
  res.status(404).write('Sorry cant find that!');
  res.write()
});*/

app.listen(8080);
