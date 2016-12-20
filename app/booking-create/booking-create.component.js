angular.module('bookingApp.bookingCreate').component('bookingCreate', {
    templateUrl: 'booking-create/booking-create.html',
    controller: function BookingCreateCtrl(){
        this.datePickerFrom = {opened: false};
        this.datePickerTo= {opened : false };

        this.openFrom = function(){
            this.datePickerFrom.opened = true;
        }
        this.openTo = function(){
            this.datePickerTo.opened = true;
        }


    }

});