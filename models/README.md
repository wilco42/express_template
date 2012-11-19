Mongoose models go here.

Sample model:
/**
 * profile
 * @param {object} mongoose Mongoose.
 * @return {object} profile schema.
 */
module.exports = function(mongoose) {
    return new mongoose.Schema({
        userid: Number,
        username: String,
        profileImage: String,
        totalCollections: Number,
        totalItems: Number
    });
};

Sample use of model in route:
// compile models/profile.js schema into a model
var profile = res.app.get('model').create('profile');

// create a new object from the model
var newUser = new profile({username: 'another name'});

// save the object
newUser.save();
