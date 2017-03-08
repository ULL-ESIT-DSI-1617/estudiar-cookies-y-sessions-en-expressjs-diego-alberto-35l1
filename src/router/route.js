
var express = require('express');
var router = express.Router();
var app = express();

router.use(function (req, res, next){ // Middleware
  console.log('en /router');
  next();
});

router.get('/router', function(req, res, next){
  res.sendfile(__dirname + '/html/a.html');
});

app.use('/router', router);

app.listen(3000);

module.exports = router;    //exportamos router
