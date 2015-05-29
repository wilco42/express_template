var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    hoffman = require('hoffman'),
    app = express(),
    dustPartials = require('./lib/partial'),
    isDevelopment = app.get('env') === 'development';

// routes
var routes = require('./routes/index'),
    users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');

// if dev environment, turn off view cache
if (isDevelopment) {
    app.set('view cache', false);
} else {
    app.set('view cache', true);
}
app.engine('dust', hoffman.__express);

// add custom dust partials
dustPartials(hoffman.dust);

// adds res.stream()
app.use(hoffman.stream);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
if (isDevelopment) {
    // development error handler will print stacktrace
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.stream('error', {
            message: err.message,
            error: err
        });
    });
} else {
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.stream('error', {
            message: err.message,
            error: {}
        });
    });
}

module.exports = app;
