(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http) {

        var service = {
            getSomething: getSomething
        };

        return service;
        
        function getSomething(){
            return;
        }
    }
})();