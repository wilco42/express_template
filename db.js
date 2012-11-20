/**
 * Database setup layer
 * @param {object} mongoose - Mongoose object.
 * @param {object} fs - node fs object.
 * @return {object} models - all of the DB models for the project.
 */
module.exports = function(mongoose, fs) {
    var db = mongoose.createConnection('localhost', 'test');

    // create all models in the /models directory
    var models = {};
    fs.readdirSync('./models').forEach(function(file) {
        if (file.indexOf('.js') !== -1) {
            var modelName = file.substring(0, file.length - 3);
            var schema = require('./models/' + modelName)(mongoose);
            models[modelName] = db.model(modelName, schema);
        }
    });
    return models;
};
