/**
 * Routes
 * @param {object} app Application object.
 * @param {object} mongoose Mongoose object.
 */
module.exports = function(app, mongoose) {
    // include all of the routes
    var root = require('./routes/root')(mongoose);

    // set routes
    app.get('/', root.index);

    // if nothing else matched, send a 404.
    app.use(function(req, res, next) {
        res.status(404).render('404', {
            url: req.originalUrl
        });
    });
};
