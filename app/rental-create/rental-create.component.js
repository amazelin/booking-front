angular.module('rentalApp.rentalCreate').component('rentalCreate', {
    templateUrl: 'rental-create/rental-create.html',
    controller: function RentalCreateCtrl(){
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