/*global Box*/
// page two
require('../css/style.scss');
require('expose?$!expose?jQuery!jquery');
// require('./services/router.js');
require('./modules/page.js');
console.log('this is page 2');

Box.Application.init({
    debug: true
});
