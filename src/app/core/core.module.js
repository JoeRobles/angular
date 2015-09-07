(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Our reusable cross app code modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router',
        /*
         *  App modules
         */
        'app.layout',
        'app.dashboard'
        /*
         * 3rd Party modules
         */
        
    ]);
})();