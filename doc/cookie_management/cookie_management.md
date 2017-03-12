# Cookie Management

<div style="text-align:center"><img style="width:60%; height:60%" src="cookie.png"/></div>
<br>

## ¿Qué es una cookie?

Las cookies son pequeñas piezas de datos enviadas desde un sitio web, se almacenan en el navegador web del usuario mientras el usuario está navegando en ese sitio web. Cada vez que el usuario carga el sitio Web de nuevo, el navegador envía los datos almacenados de nuevo al sitio web o al servidor, para distinguir la actividad anterior del usuario.

## ¿Qué es Express?

Express es un framework de aplicaciones web Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles.

##¿Cuál es su apariencia?
```
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
```

## Instalación

 Lo primero que haría es instalar el middleware de cookie-parser a través de npm en la carpeta node_modules que se encuentra en la carpeta de su aplicación. Para instalarlo:

 * Abre una terminal
 * Dirigete a la carpeta de tu aplicación

 ```
 $ npm install cookie-parser
 ```

## Usando Cookie-Parser
```

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
```

## Sintaxis
```
Cookie-parser analiza el encabezado de Cookie y rellena req.cookies con un objeto marcado con los nombres de las cookies. Para establecer una nueva cookie, podemos definir una nueva ruta en tu aplicación express como:

app.get('/cookie',function(req, res){
     res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});
```

El navegador envía esa cookie al servidor, cada vez que solicite ese sitio web. Y para obtener una cookie que un navegador podría estar enviando al servidor adjuntándolo al encabezado de solicitud, podemos escribir el siguiente código:
```
app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});
```

## ¿Cómo establecer el tiempo de caducidad de una cookie?
```
res.cookie(name , 'value', {expire : new Date() + 9999});
```


Las opciones de adición de cookies se pueden establecer pasando un objeto como argumento que lleva configuraciones adicionales para las cookies. Por lo tanto, para establecer el tiempo de caducidad a las cookies, se puede enviar un objeto con expiración de propiedad que contiene el tiempo de caducidad en milisegundos.
```
res.cookie(name, 'value', {maxAge : 9999});
```

## ¿Cómo borrar una Cookie existente"

Las cookies existentes se pueden eliminar fácilmente usando el método clearCookie, que acepta el nombre de la cookie que desea eliminar.
```
app.get('/clearcookie', function(req,res){
     clearCookie('cookie_name');
     res.send('Cookie deleted');
});
```
