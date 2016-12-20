angular.module('bookingApp.bookingDetail').component('bookingDetail', {
    templateUrl: 'booking-detail/booking-detail.html',
    controller: ['$routeParams', function BookingDetailCtrl($routeParams) {
        this.bookingId = $routeParams.bookingId;
    }]
});