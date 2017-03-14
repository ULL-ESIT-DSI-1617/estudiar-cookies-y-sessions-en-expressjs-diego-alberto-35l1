var cookie = require('cookie');
var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');

function onRequest(req, res) {
  // Parse the query string
  var query = url.parse(req.url, true, true).query;

  if (query && query.name) {
    // Set a new cookie with the name
    res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));

    // Redirect back after setting cookie
    res.statusCode = 302;
    res.setHeader('Location', req.headers.referer || '/');
    res.end();
  }


  var cookies = cookie.parse(req.headers.cookie || '');

  // Get the visitor name set in the cookie
  var name = cookies.name;

  res.setHeader('Content-Type', 'text/html; charset=UTF-8');

  if (name) {
    res.write('<p>bienvenido de nuevo!, <b>' + escapeHtml(name) + '</b>!</p>');
  } else {
    res.write('<p>Hola nuevo ser humano!</p>');
  }

  res.write('<form method="GET">');
  res.write('<input placeholder="escribe tu nombre" name="name"> <input type="submit" value="Set Nombre">');
  res.end('</form');
}

http.createServer(onRequest).listen(8080);
