var express = require('express');
var path = require('path');

// instanciar
var app = express();

app.use(express.static(path.resolve('gh-pages'))); //ponemos ruta por defecto relativa

var port = process.env.PORT || 8086;
app.listen(port);
