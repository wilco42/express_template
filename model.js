/**
 * @param {object} db Mongoose object.
 * @return {object} Mongoose model.
 */
module.exports = function(db) {
    var model = {
        db: null,
        create: function(schema) {
            var newSchema = require('./models/' + schema)(model.db.base);
            var newModel = model.db.model(schema, newSchema);
            return newModel;
        }

    };
    model.db = db;
    return model;
};

