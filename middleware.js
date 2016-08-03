// put middleware code into this new file

var middleware = {
  requireAuthentication: function (req, res, next) {
      console.log('private route hit!');
      next();
  },
    // add log with date (time) + request method
    logger: function (req, res, next) {
        console.log('Request: ' + new Date().toString() + '' + req.method + '' + req.originalUrl);  
        next();
    }
};

// set to module.exports

module.exports = middleware;