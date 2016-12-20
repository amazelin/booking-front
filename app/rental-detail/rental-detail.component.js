angular.module('rentalApp.rentalDetail').component('rentalDetail', {
    templateUrl: 'rental-detail/rental-detail.html',
    controller: ['$routeParams', function RentalDetailCtrl($routeParams) {
        this.rentalId = $routeParams.rentalId;
    }]
});