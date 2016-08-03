var express = require('express');
var app = express();

app.get('/', function (request, response) {  // '/' root URL  get = http method, so getting info via request, with a response back from get
    response.send('Hello Express!');
});

app.listen(3000); // specifies port to be listened on