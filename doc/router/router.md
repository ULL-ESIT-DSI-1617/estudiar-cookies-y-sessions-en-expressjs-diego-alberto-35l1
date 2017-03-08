# Router API Documentation


Un objeto router es una instancia aislada de un middleware y ruta. Se puede pensar en ella como una "mini-aplicación", capaz sólo de realizar middleware y funciones de routing. Cada aplicación en Express tiene un router app incorporado.


Un router se comporta como un middleware, por lo que puede utilizarse como argumento para app.use() o como argumento para el método use() de otro router.

El objeto Express de nivel superior tiene un método Router() que crea un nuevo objeto router.

Una vez que haya creado un objeto router, puede agregar middleware y de método HTTP (como GET, PUT, POST, etc.) Por ejemplo:
```
// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function(req, res, next) {
  // ..
});
```

## Métodos

**router.all(path, [callback, ...] callback)**

Éste método se asemeja a los métodos router.METHOD(), excepto porque coincide con todos los métodos de HTTP.

Éste método util para el mapping global logico para prefijos, coincidencias arbitrarias o paths. Por ejemplo, si colocas la siguiente ruta en la parte superior del resto de las otras definiciones de rutas, debería requerir una autenticacion para todos las rutas desde ese punto, y automaticamente cargar un usuario.

Las callbacks no tienen que actuar como puntos y aparte; loadUser puede funcionar como una tarea, a continuacion para seguir coincidiendo con las anteriores rutas usar la función next().

Hay que fijarse en que las callbacks no tienen que actuar como puntos y aparte; loadUser puede funcionar como una tarea, a continuacion para continuar coincidiendo con las anteriores rutas usar la funcion next().

```
router.all('*', requireAuthentication, loadUser);
```
equivalente a:
```
router.all('*', requireAuthentication);
router.all('*', loadUser);
```
**router.METHOD(path, [callback, ...] callback)**
Los metodos router.METHOD() proporcionan funcionalidad  routing en Express, METHOD es uno de los metodos HTTP, como GET, PUT, POST escrito en minuscula:_ router.get(), router.post(), router.put()_ y otros.

```
router.get('/', function(req, res){
  res.send('hello world');
});
```
```
router.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res){
  var from = req.params[0];
  var to = req.params[1] || 'HEAD';
  res.send('commit range ' + from + '..' + to);
});
```
**router.param(name, callback)**

Añade un disparador de callback a un parametro de ruta donde name es el nombre del parametro y callback es la funcion de callback. Name es opcional, pero usar el metodo sin el está en Express desde la v4.11.0.

Los parametros de callback son:

* req ,el objeto pedido
* res ,el objeto de respuesta
* next, próxima funcion middleware
* El valor del parámetro name
* El valor del parámetro

```
router.param('user', function(req, res, next, id) {

  // try to get the user details from the User model and attach it to the request object
  User.find(id, function(err, user) {
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
})
```

**router.route(path)**
Devuelve una instancia de una ruta que puede ser usada como manejador de HTTP con middleware. Usa router.route() para no cometer errores de duplicar el nombre de varios routers.

El ejemplo del siguiente nos enseña como usar router.route() para especificar varios manejadores en métodos HTTP.

```
var router = express.Router();

router.param('user_id', function(req, res, next, id) {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id: id,
    name: 'TJ'
  };
  next();
});

router.route('/users/:user_id')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.json(req.user);
})
.put(function(req, res, next) {
  // just an example of maybe updating the user
  req.user.name = req.params.name;
  // save user ... etc
  res.json(req.user);
})
.post(function(req, res, next) {
  next(new Error('not implemented'));
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});
```

**router.use([path], [function, ...] function)**
Usa las funciones de middleware especificadas, con la ruta cuyo valor por defecto es "/".

Este método es igual a app.use(). A continuación se describe un ejemplo muy simple de uso.

Las solicitudes en un middleware comienzan en la primera función de middleware definida y funciona de manera descendente en el procesado de la pila de middleware para cada ruta en la que haya una coincidencia.
```
var express = require('express');
var app = express();
var router = express.Router();

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

// this will only be invoked if the path starts with /bar from the mount point
router.use('/bar', function(req, res, next) {
  // ... maybe some additional /bar logging ...
  next();
});

// always invoked
router.use(function(req, res, next) {
  res.send('Hello World');
});

app.use('/foo', router);

app.listen(3000);
```

El orden en el que se define el middleware con router.use() es muy importante, se invocan secuencialmente, el orden define la precedencia de middleware. Por lo general, un logger es el primer middleware que se utilizaría, por lo que cada solicitud se registra.

```
var logger = require('morgan');

router.use(logger());
router.use(express.static(__dirname + '/public'));
router.use(function(req, res){
  res.send('Hello');
});
```

si se quiere ignorar peticiones de loggin para archivos estaticos, pero continuar haciendo logging de rutas y middleware definidos despues de logger(), se mueve la llamada a express.static() al comienzo, antes de añadir el logger middleware:

```
router.use(express.static(__dirname + '/public'));
router.use(logger());
router.use(function(req, res){
  res.send('Hello');
});
```
Tambien se puede hacer servidor de archivos de múltiples directorios, dando la precedencia a "./public" frente al resto de rutas:
```
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + '/uploads'));
```
