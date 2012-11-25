Mongoose models go here.

Sample model:
var mongoose = require('mongoose');
var profile = new mongoose.Schema({
    userid: Number,
    username: String,
    profileImage: String,
    totalCollections: Number,
    totalItems: Number
});

module.exports = profile;


Sample use of model in route:
// create a new object from the model
var newUser = res.app.models.profile({username: 'another name'});

// save the object
newUser.save();
