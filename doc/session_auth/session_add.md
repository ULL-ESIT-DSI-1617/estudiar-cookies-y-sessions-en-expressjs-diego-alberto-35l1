# Autenticación en Node.js usando Express
<div style="text-align:center"><img style="width:60%; height:60%" src="cookie.png"/></div>
<br>

La autenticación es el proceso de verificar si el usuario es de hecho quien se declara ser. La autorización es el proceso de determinar si el usuario tiene los privilegios para acceder a los recursos que ha solicitado.
Este fragmento de código node.js demostró un ejemplo muy simple de proceso de autenticación y autorización mediante session en express.js. Hay un punto final de inicio de sesión, un punto final de cierre de sesión y una página de publicación. Para ver la página de correos, primero tiene que iniciar sesión y su identidad será verificada y guardada en la sesión. Cuando pulse el punto final de cierre de sesión, revocará su acceso eliminando su identidad de la sesión.
Session_auth.js

```
var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};

// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
  }
});

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});

app.listen(3000);
console.log("app running at http://localhost:3000");
```

## Para ejecutar este código desde la terminal
```
npm install express
npm install express-session
node session_auth.js &
```

Importa express y  express-session modules. Crea una app express y añadele la sesión como un middleware.
```
var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
```


## Función de middleware de autenticación y autorización.

 Una aplicación web real obtendrá el usuario y el nivel de acceso de usuario desde la sesión y, a continuación, comprobar contra el usuario y el acceso de un usuario a una base de datos en el servidor.
 ```
 // Authentication and Authorization Middleware
 var auth = function(req, res, next) {
   if (req.session && req.session.user === "amy" && req.session.admin)
     return next();
   else
     return res.sendStatus(401);
 };
 ```
 **localhost:3000/login?username=amy&password=amyspassword**
 La url de inicio de sesión para registrar el usuario al guardar el nivel de acceso de usuario y usuario en una sesión. La sesión será diferente para cada usuario, y también será única para el mismo usuario utilizando diferentes navegadores. Por ejemplo, si el mismo usuario ha iniciado sesión con Chrome y abrió Firefox, el usuario tendrá que iniciar sesión nuevamente en FireFox para obtener recursos protegidos. Para fines de demostración, se trata de una solicitud de obtención y pasar en la información a través de parámetros de consulta. Una aplicación web real normalmente usará una solicitud de publicación y pasará los datos en el formulario de publicación. Una vez más, el usuario y las contraseñas se codifican aquí con fines de demostración. Una aplicación web real comprobará el usuario entrante y la contraseña contra el usuario y la contraseña almacenada en una base de datos en el servidor allí.
```
 // Login endpoint
 app.get('/login', function (req, res) {
   if (!req.query.username || !req.query.password) {
     res.send('login failed');    
   } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
     req.session.user = "amy";
     req.session.admin = true;
     res.send("login success!");
   }
 });
 ```
  localhost:3000/logout
  Una vez que la sesión se destruye, el usuario tendrá que golpear la url de inicio de sesión de nuevo con el fin de obtener recursos protegidos

  ```

  // Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
```
localhost:3000/content
Obtener el contenido protegido. La función de autenticación anterior se pasa en los segundos parámetros como middleware antes de proceder a servir el contenido al usuario. Si la función auth determinó que el usuario no es válido, no pasará a la tercera función para servir el contenido.

```
// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
```
Inicia la app en el puerto 3000.

```
app.listen(3000);
console.log("app running at http://localhost:3000");
```
