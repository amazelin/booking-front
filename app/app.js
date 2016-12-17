'use strict';

// Declare app level module which depends on views, and components
angular.module('rentalApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.version',
    'rentalApp.rentalList',
    'rentalApp.rentalDetail'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/rentals', {
            template: '<rental-list></rental-list>'
        }).
        when('/', {
            redirectTo: '/rentals'
        }).
        when('/rentals/:rentalId', {
            template: '<rental-detail></rental-detail>'
        }).
        otherwise({redirectTo: '/'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);

