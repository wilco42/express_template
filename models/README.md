Mongoose models go here.

Sample model:
var mongoose = require('mongoose');
/**
 * profile
 * @return {object} profile schema.
 */
module.exports = function() {
    return new mongoose.Schema({
        userid: Number,
        username: String,
        profileImage: String,
        totalCollections: Number,
        totalItems: Number
    });
};

Sample use of model in route:
// create a new object from the model
var newUser = res.app.models.profile({username: 'another name'});

// save the object
newUser.save();
