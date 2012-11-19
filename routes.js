/**
 * Routes
 * @param {object} app Application object.
 */
module.exports = function(app) {
    // include all of the routes as objects
    var root = require('./routes/root');

    // set routes
    app.get('/', root.index);

    // if nothing else matched, send a 404.
    app.use(function(req, res, next) {
        res.status(404).render('404', {
            url: req.originalUrl
        });
    });
};
