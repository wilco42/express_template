/*global Box*/
Box.Application.addModule('page', function(context) {
    var routerService;

    return {

        messages: ['statechanged'],

        init: function() {
            routerService = context.getService('router');

            // set up all of the routes here to be broadcasted
            routerService.init([
                '/',
                '/page/:page',
                '/users/'
            ]);
        },

        onmessage: function(name, data) {
            if (name === 'statechanged') {
                console.log(data);
            }
        },

        destroy: function() {
            routerService.destroy();
        }

    };

});
