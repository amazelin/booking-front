'use strict';

// Declare app level module which depends on views, and components
angular.module('rentalApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.view1',
    'myApp.version',
    'rentalApp.rentalList',
    'rentalApp.rentalDetail',
    'rentalApp.rentalCreate'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/rentals', {
            template: '<rental-list></rental-list>'
        }).
        when('/', {
            template: '<rental-create></rental-create>'
        }).
        when('/rentals/:rentalId', {
            template: '<rental-detail></rental-detail>'
        }).
        otherwise({redirectTo: '/'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);

