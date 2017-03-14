var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));


var auth = function(req, res, next) {
  if (req.session && req.session.user === "alberto" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};


app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('fallo inicio de sesion');
  } else if(req.query.username === "alberto" || req.query.password === "alberto") {
    req.session.user = "alberto";
    req.session.admin = true;
    res.send("logeado con exito!");
  }
  else{
    res.send('fallo inicio de sesion');
  }
});

app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("cerrada sesión correctamente!");
});


app.get('/content', auth, function (req, res) {
    res.send(req.session.user + "solo puede ver esto despues de haber iniciado sesion");
});

app.listen(3000);
console.log("app corriendo en http://localhost:3000");
