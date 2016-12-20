'use strict';

// Declare app level module which depends on views, and components
angular.module('bookingApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.view1',
    'myApp.version',
    'bookingApp.bookingList',
    'bookingApp.bookingDetail',
    'bookingApp.bookingCreate'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/bookings', {
            template: '<booking-list></booking-list>'
        }).
        when('/', {
            template: '<booking-create></booking-create>'
        }).
        when('/bookings/:bookingId', {
            template: '<booking-detail></booking-detail>'
        }).
        otherwise({redirectTo: '/'});

}]);

