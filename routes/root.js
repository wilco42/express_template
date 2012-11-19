/**
 * Index route
 * @param {object} mongoose Mongoose object.
 * @return {object} Route object.
 */
module.exports = function(mongoose) {
    var route = {
        // index controller
        index: function(req, res) {
            res.render('index', {
                title: 'this is the title'
            });
        }
    };
    return route;
};
