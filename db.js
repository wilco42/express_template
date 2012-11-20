var mongoose = require('mongoose'),
    fs = require('fs');
/**
 * Database setup layer
 * @return {object} models - all of the DB models for the project.
 */
module.exports = function() {
    var db = mongoose.createConnection('localhost', 'test'),
        models = {};

    fs.readdirSync('./models').forEach(function(file) {
        if (file.indexOf('.js') !== -1) {
            var modelName = file.substring(0, file.length - 3);
            var schema = require('./models/' + modelName)(mongoose);
            models[modelName] = db.model(modelName, schema);
        }
    });
    return models;
};
