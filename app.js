var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    mongoose = require('mongoose'),
    path = require('path');

app.configure(function() {
    app.engine('dust', cons.dust);
    app.set('view engine', 'dust');
    app.set('views', __dirname + '/views');
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

// setup the routes
var routes = require('./routes')(app, mongoose);

// fire up the server
app.listen(4000);
console.log('listening on port 4000');
