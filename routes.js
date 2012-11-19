/**
 * Routes
 * @param {object} app Application object.
 */
module.exports = function(app) {
    // include all of the routes
    var index = require('./routes/index');

    // set routes
    app.get('/', index.index);

    // if nothing else matched, send a 404.
    app.use(function(req, res, next) {
        res.status(404).render('404', {
            url: req.originalUrl
        });
    });

};
