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

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

var rentals  = [{
    startDate: '01/12/2016',
    endDate: '15/12/2016',
    status: 'over',
    owner: {
        firstName: 'Arnaud',
        lastName: 'Mazelin'
    }
}, {
    startDate: '01/01/2017',
    endDate: '08/01/2017',
    status: 'validated',
    owner: {
        firstName: 'Laetitia',
        lastName: 'Joërg'
    }
}, {
    startDate: '01/07/2017',
    endDate: '15/08/2017',
    status: 'pending',
    owner: {
        firstName: 'Jane',
        lastName: 'Doe'
    }
}];

