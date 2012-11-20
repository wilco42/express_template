/**
 * Docroot routes
 * @param {object} req Request object.
 * @param {object} res Result object.
 */
exports.index = function(req, res) {
/*
//Sample use of model in route:
// compile models/profile.js schema into a model
var profile = res.app.get('model').create('profile');

// create a new object from the model
var newUser = new profile({username: 'another name'});

// save the object
newUser.save();
*/
    res.render('index', {
        title: 'this is the title'
    });
};
