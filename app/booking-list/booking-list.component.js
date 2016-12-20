/**
 * Created by arnaud on 15/12/2016.
 * Booking list component: use to render all booking
 */
angular.module('bookingApp.bookingList').component('bookingList', {
    templateUrl: 'booking-list/booking-list.html',
    controller: ['$http', function BookingListCtrl($http) {
        var self = this;
        $http.get('booking-list/bookings.json').then(function (response) {
            self.bookings = response.data;
        });

        this.sortType = {};
        this.sortReverse = false;
        this.setSortType = function (setSortType, setSortReverse) {
            this.sortType = setSortType;
            this.sortReverse = setSortReverse;
        }


    }]
});

