var app = angular.module('testApp', ['ui.timepicker']);

app.controller('TimepickerCtrl', function ($scope) {
    $scope.date = new Date('2014-01-01T18:00:00');
    $scope.options = {
        step: 5,
        timeFormat: 'H:i'
    };

    $scope.increaseDate = function(date) {
        date.setDate(date.getDate() + 1);
    };

    $scope.increaseHour = function(date) {
        date.setHours(date.getHours() + 1);
    };
});
