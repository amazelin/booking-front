angular.module('bookingApp.calendar').component('calendar',  {
    templateUrl: 'calendar/calendar.html',
    controller: function CalendarControllerCtrl(){
        this.eventSources = [];
    }

});