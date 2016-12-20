angular.module('bookingApp.core', [])

.filter('range', function(){

        return function(input, min, max){
            min = parseInt(min);
            max = parseInt(max);
            for(var i=min; i<=max; i++){
                input.push(i);

            }
            return input;

        }
    });
