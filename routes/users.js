var express = require('express'),
    router = express.Router();

router.get('/users', function(req, res) {
    res.stream('users', {
        data: function(chunk) {
            return chunk.map(function(chunk) {
                setTimeout(function() {
                    return chunk.end('my dog has fleas');
                }, 1000);
            });
        }
    });
});

module.exports = router;
