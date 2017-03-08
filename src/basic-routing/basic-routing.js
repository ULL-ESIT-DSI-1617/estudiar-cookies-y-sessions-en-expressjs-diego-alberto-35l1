var app = require('express')();

app.get('/', function (req, res) {
  res.send('METODO GET');
  console.log(req.param('parametro')); //mostramos el valor del parámetro
})

app.post('/', function (req, res) {
  res.send('METODO POST');
})

app.put('/', function (req, res) {
  res.send('METODO PUT');
})

app.delete('/', function (req, res) {
  res.send('METODO DELETE');
})

app.listen(8080);
