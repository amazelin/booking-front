'use strict';

// Declare app level module which depends on views, and components
angular.module('rentalApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'rentalApp.rentals'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/rentals', {
            template: '<rental-list></rental-list>'
        }).
        when('/', {
            redirectTo: '/rentals'
        }).
        otherwise({redirectTo: '/'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);

