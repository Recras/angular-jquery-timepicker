/*global angular */
/*
 Directive for jQuery UI timepicker (http://jonthornton.github.io/jquery-timepicker/)

 */
angular.module('ui.timepicker', [])

.constant('uiTimepickerConfig', {
    'step' : 15,
    'timeFormat': 'H:i'
})

.directive('uiTimepicker', ['uiTimepickerConfig', function(uiTimepickerConfig) {
    return {
        restrict: 'A',
        require: '?ngModel',
        priority: 1,
        link: function(scope, element, attrs, ngModel) {

            if(!ngModel) return; // do nothing if no ng-model

            var read = function() {
                var datetime = element.timepicker('getTime', ngModel.$viewValue);
                ngModel.$setViewValue(datetime);
                ngModel.$render();
            };

            ngModel.$render = function () {
                var date = ngModel.$viewValue;
                if ( angular.isDefined(date) && date !== null && !angular.isDate(date) ) {
                    throw new Error('ng-Model value must be a Date object - currently it is a ' + typeof date + '.');
                }
                element.timepicker('setTime', date);
                element.html(element.data('ui-timepicker-value'));
            };

            element.timepicker(uiTimepickerConfig);

            element.on('changeTime', function() {
                if(!scope.$$phase) {
                    scope.$apply(read);
                }
            });
            read();
        }
    };
}]);
