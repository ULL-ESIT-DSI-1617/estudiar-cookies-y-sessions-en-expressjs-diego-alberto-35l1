var cookie = require('cookie');
var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');

function onRequest(req, res) {
  // Parseamos la url para obtener el valor del formulario por el método GET
  var query = url.parse(req.url, true, true).query;

  if (query && query.name) {
    // Creamos una cookie con dicho valor anterior del formulario
    res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));

    // Redirect back after setting cookie
    res.statusCode = 302;
    res.setHeader('Location', req.headers.referer || '/');
  }

  //Obtenemos un objeto con las cookies de la peticion
  var cookies = cookie.parse(req.headers.cookie || '');

  //Obtenemos el valor de la cookie name
  var name = cookies.name;

  res.setHeader('Content-Type', 'text/html; charset=UTF-8');

  if (name) {
    res.write('<p>Welcome back, <b>' + escapeHtml(name) + '</b>!</p>');
  } else {
    res.write('<p>Hello, new visitor!</p>');
  }

  res.write('<form method="GET">');
  res.write('<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name">');
  res.end('</form');
}

http.createServer(onRequest).listen(3000);
