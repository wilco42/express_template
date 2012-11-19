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
    // TODO: see if there is a better way to do this?
    app.mongoose = mongoose;
});

// setup the routes
require('./routes')(app);

// fire up the server
app.listen(4000);
console.log('listening on port 4000');
