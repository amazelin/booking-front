/**
 * Created by arnaud on 15/12/2016.
 * Rental list component: use to render all rentals
 */
angular.module('rentalApp.rentals').component('rentalList',{
    templateUrl: 'rentals/rental-list.html',
    controller: function RentalListCtrl() {
        this.rentals = rentals;
        this.sortType = {};
        this.sortReverse = false;
        this.setSortType = function(setSortType, setSortReverse){
            this.sortType = setSortType;
            this.sortReverse = setSortReverse;
        }

    }
});

