var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; // Heroku set up 

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) { 
    response.send('About us');  
});

app.use(express.static(__dirname + '/public')); 

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT); 
}); 