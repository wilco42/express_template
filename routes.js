/**
 * Routes
 * @param {object} app Application object.
 * @param {object} fs Node fs object.
 */
module.exports = function(app, fs) {
    var routes = {};
    fs.readdirSync('./routes').forEach(function(file) {
        var route = file.substring(0, file.length - 3);
        routes[route] = require('./routes/' + route);
    });

    // set routes
    app.get('/', routes.root.index);

    // if nothing else matched, send a 404.
    app.use(function(req, res, next) {
        res.status(404).render('404', {
            url: req.originalUrl
        });
    });
};
