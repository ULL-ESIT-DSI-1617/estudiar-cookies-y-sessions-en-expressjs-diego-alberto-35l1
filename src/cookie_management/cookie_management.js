var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/cookie',function(req, res){
     res.cookie(nombre_cookie , 'micookie').send('Cookie creada');
});

app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});

app.get('/clearcookie', function(req,res){
     clearCookie('micookie');
     res.send('Cookie eliminada');
});
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Escuchando en http://%s:%s', host, port);

});
