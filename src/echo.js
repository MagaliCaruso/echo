
angular.module('plugin', ['ngCordova', 'ionic'])

    .factory('echo', function ($window) {

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
                }, "Echo", "echo", [str]);
        };

        return 1;

    });       



