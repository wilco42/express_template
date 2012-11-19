/**
 * Index route
 * @param {object} req Request object.
 * @param {object} res Result object.
 */
exports.index = function(req, res) {
    res.render('index', {
        title: 'this is the title'
    });
};
