/*global angular */
/*
 Directive for jQuery UI timepicker (http://jonthornton.github.io/jquery-timepicker/)

 */
angular.module('ui.timepicker', [])

.value('uiTimepickerConfig', {
    'step' : 15,
    'timeFormat': 'H:i'
})

.directive('uiTimepicker', ['uiTimepickerConfig', function(uiTimepickerConfig) {
    return {
        restrict: 'A',
        require: 'ngModel',
        priority: 1,
        link: function(scope, element, attrs, ngModel) {

            ngModel.$render = function () {
                var date = ngModel.$modelValue;
                if ( angular.isDefined(date) && date !== null && !angular.isDate(date) ) {
                    throw new Error('ng-Model value must be a Date object - currently it is a ' + typeof date + '.');
                }
                if (!element.is(":focus")) {
                    element.timepicker('setTime', date);
                }
            };

            ngModel.$parsers.unshift(function(viewValue){
                var date = element.timepicker('getTime', ngModel.$modelValue);
                return date;
            });

            scope.$watch(attrs.ngModel, function() {
                ngModel.$render();
            }, true);

            element.timepicker(uiTimepickerConfig);

            element.on('changeTime', function() {
                scope.$evalAsync(function() {
                    var date = element.timepicker('getTime', ngModel.$modelValue);
                    ngModel.$setViewValue(date);
                });
            });
        }
    };
}]);
