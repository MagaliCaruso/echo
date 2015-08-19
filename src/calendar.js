
/*angular.module('plugin', ['ngCordova', 'ionic'])

    .factory('calendar', function ($window, $ionicPlatform) {


        function createEvent(title, location, notes, startDate, endDate, successCallback, errorCallback) {

            ionic.Platform.ready(function(){

                var resultado = cordova.exec(  
                    successCallback, // success callback function
                    errorCallback, // error callback function
                    'Calendar', // mapped to our native Java class called "Calendar"
                    'addCalendarEntry', // with this action name
                    [{                  // and this array of custom arguments to create our entry
                        "title": title,
                        "description": notes,
                        "eventLocation": location,
                        "startTimeMillis": startDate.getTime(),
                        "endTimeMillis": endDate.getTime()
                    }]
                 
                ); 

            });
            alert(resultado);
            console.log(resultado);
            
           return true;
        }

            return {
            createEvent: createEvent
        };

    });       
*/


    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };