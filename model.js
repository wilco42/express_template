/**
 * Model factory class
 * @param {object} db Mongoose object.
 * @return {object} create() method will create the model you seek.
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
    // initialize this object with the DB handle
    model.db = db;
    return model;
};

