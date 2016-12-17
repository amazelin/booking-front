/**
 * Created by arnaud on 15/12/2016.
 * Rental list component: use to render all rentals
 */
angular.module('rentalApp.rentalList').component('rentalList', {
    templateUrl: 'rental-list/rental-list.html',
    controller: ['$http', function RentalListCtrl($http) {
        var self = this;
        $http.get('rental-list/rentals.json').then(function (response) {
            self.rentals = response.data;
        });

        this.sortType = {};
        this.sortReverse = false;
        this.setSortType = function (setSortType, setSortReverse) {
            this.sortType = setSortType;
            this.sortReverse = setSortReverse;
        }


    }]
});

