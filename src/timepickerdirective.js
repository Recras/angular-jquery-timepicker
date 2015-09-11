/*global angular */
/*
 Directive for jQuery UI timepicker (http://jonthornton.github.io/jquery-timepicker/)

 */
angular.module('ui.timepicker', [])

.value('uiTimepickerConfig', {
    'step' : 15
})

.directive('uiTimepicker', ['uiTimepickerConfig','$parse', '$window', function(uiTimepickerConfig, $parse, $window) {
    var moment = $window.moment;

    var isAMoment = function(date) {
        return moment !== undefined && moment.isMoment(date) && date.isValid();
    };
    var isDateString = function (date) {
        return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)));
    };
    var isDateOrMoment = function(date) {
        return angular.isDefined(date) && date !== null &&
          (angular.isDate(date) || isAMoment(date) || isDateString(date));
    };

    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            ngModel: '=',
            baseDate: '=',
            uiTimepicker: '=',
        },
        priority: 1,
        link: function(scope, element, attrs, ngModel) {
            'use strict';
            var config = angular.copy(uiTimepickerConfig);
            var asMoment = config.asMoment || false;
            delete config.asMoment;

            ngModel.$render = function () {
                var date = ngModel.$modelValue;
                if (angular.isDefined(date) && date !== null && date !== '' && !isDateOrMoment(date)) {
                    throw new Error('ng-Model value must be a Date or Moment object - currently it is a ' + typeof date + '.');
                }
                if (isAMoment(date)) {
                    date = date.toDate();
                } else if (typeof date === 'string') {
                    // Convert the date since this is a date string
                    date = new Date(date);
                }
                if (!element.is(':focus') && !invalidInput()) {
                    element.timepicker('setTime', date);
                }
            };

            scope.$watch(attrs.ngModel, function() {
                ngModel.$render();
            }, true);

            config.appendTo = config.appendTo || element.parent();

            element.timepicker(
                angular.extend(
                    config, scope.uiTimepicker ?
                    scope.uiTimepicker :
                    {}
                )
            );
            
            var userInput = function() {
                return angular.element.trim(element.val());
            };

            var invalidInput = function(){
              return userInput() && ngModel.$modelValue === null;
            };

            element.on('$destroy', function(){
                element.timepicker('remove');
            });

            var asDate = function() {
                var baseDate = ngModel.$modelValue ? ngModel.$modelValue : scope.baseDate;
                return isAMoment(baseDate) ? baseDate.toDate() : baseDate;
            };

            var asMomentOrDate = function(date) {
                return asMoment ? moment(date) : date;
            };

            if(element.is('input'))  {
                ngModel.$parsers.unshift(function(viewValue){
                    if (attrs.required && viewValue === '') {
                        ngModel.$setValidity('time', true);
                        return viewValue;
                    }
                    var date = element.timepicker('getTime', asDate() );
                    return date ? asMomentOrDate(date) : date;
                });
                ngModel.$validators.time = function(modelValue){
                    return (!attrs.required && !userInput()) ? true : isDateOrMoment(modelValue);
                };
            } else {
                element.on('changeTime', function() {
                    scope.$evalAsync(function() {
                        var date = element.timepicker('getTime', asDate() );
                        ngModel.$setViewValue(date);
                    });
                });
            }
        }
    };
}]);
