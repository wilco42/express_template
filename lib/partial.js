module.exports = function(dust) {
    dust.helpers.partial = function(chunk, context, bodies, params) {
        var Promise = require('bluebird'),
            partial = {};

        if ('partials' in context.global) {
            context.global.partials++;
        } else {
            context.global.partials = 1;
        }

        if (params) {
            for (var param in params) {
                partial[param] = params[param];
            }
        }

        // before rendering create new context using makeBase
        if (params && params.template) {
            var renderPromise = new Promise(function(resolve, reject) {
                dust.render(params.template, dust.makeBase(partial), function(err, out) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(out);
                    }
                });
            });

            if ('fragments' in context.global) {
                context.global.fragments.push(renderPromise);
            } else {
                context.global.fragments = [
                    renderPromise
                ];
            }

            return chunk.end('PLACEHOLDER - so cute!<br/>');
        } else {
            return bodies.block(chunk, dust.makeBase(partial));
        }
    };

    dust.helpers.counters = function(chunk, context, bodies, params) {
        var Promise = require('bluebird');

        // return chunk.map() to reserve a slot in the output stream
        return chunk.map(function(chunk) {
            // for every @partial promise, once it is resolved, go ahead and
            // flush its contents to the buffer.
            for (var i in context.global.fragments) {
                var promise = context.global.fragments[i];
                promise.then(function(data) {
                    chunk.write(data);
                });
            }

            // once all of the @partial promises have been resolved, end the chunk.
            Promise
                .settle(context.global.fragments)
                .then(function() {
                    chunk.end();
                });
        });

    };
};
