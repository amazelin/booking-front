'use strict';

// Declare app level module which depends on views, and components
angular.module('bookingApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.version',
    'bookingApp.bookingList',
    'bookingApp.bookingDetail',
    'bookingApp.bookingCreate',
    'bookingApp.calendar'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/bookings', {
            template: '<booking-list></booking-list>'
        }).
        when('/', {
            templateUrl: 'home.html'
        }).
        when('/bookings/:bookingId', {
            template: '<booking-detail></booking-detail>'
        }).
        otherwise({redirectTo: '/'});

}]);

