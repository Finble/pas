var express = require('express');
var app = express();
var PORT = 3000;   // capital letters = constant, value should NOT change
    
//app.get('/', function (request, response) {  
//    response.send('Hello Express!');  
//});  // by deleting this, there is no root file route, which means index.html will act as default (always), so without a '/' route being set up, then index.html will auto be called (so do not need to put index.html into browser, localhost:3000 only will show index.html automatically)

app.get('/about', function (request, response) {
    response.send('About us');  
});

app.use(express.static(__dirname + '/public')); // shows website inside of node.js app - run localhost:3000/index.html in browser, and it will print out whatever is in index.html file, e.g. Hello Express.js

//console.log(__dirname);

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT); // add this to signal (in terminal) that server is up and ready vs node server.js and prompt is empty (in terminal)
}); 