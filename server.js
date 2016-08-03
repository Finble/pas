var express = require('express');
var app = express();
var PORT = 3000; 

// route level middleware - applies to SOME routes

var middleware = {
  requireAuthentication: function (req, res, next) {
      console.log('private route hit!'); // prints only when route input into browser
      next();
  },
    logger: function (req, res, next) {
        console.log('Request: ' + req.method + '' + req.originalUrl);  // prints out http method, e.g. get + route, so get/index.html or get/about - so shows which requests are being made to the server
        next();
    }
};

app.use(middleware.logger);

//app.use(middleware.requireAuthentication); //.use is a way of calling middleware, order is important here, this must be BEFORE other routes

app.get('/about', middleware.requireAuthentication, function (request, response) { // adds route-level middleware as requireAuthentication is only called when about route is put in browser
    response.send('About us');  
});

app.use(express.static(__dirname + '/public')); 

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT); 
}); 