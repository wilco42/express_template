var express = require('express'),
    router = express.Router(),
    fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
    res.stream('index', {
        title: function() {
            return 'asdfasdf';
        },

        stuff: function(chunk) {
            return chunk.map(function(chunk) {
                setTimeout(function() {
                    var stream = fs.createReadStream('data/data.xml');
                    stream
                        .on('data', function(data) {
                            chunk.write(data);
                        })
                        .on('end', function(data) {
                            chunk.end(data);
                        });
                }, 100);
            });
        },

        morestuff: function(chunk) {
            return chunk.map(function(chunk) {
                setTimeout(function() {
                    var stream = fs.createReadStream('data/data2.txt');
                    stream
                        .on('data', function(data) {
                            chunk.write(data);
                        })
                        .on('end', function(data) {
                            chunk.end(data);
                        });
                }, 200);
            });
        }
    });
});

module.exports = router;
