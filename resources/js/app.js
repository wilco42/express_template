/*global Box*/
require('../css/style.scss');
require('expose?$!expose?jQuery!jquery');
require('./modules/share-widget');
require('./services/router');
require('./modules/page');

Box.Application.init({
    debug: true
});
