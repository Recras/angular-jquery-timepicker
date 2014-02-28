
/*global describe, beforeEach, afterEach, it, inject, expect, module, dump, $*/
describe('uiTimepicker', function() {
    'use strict';
    beforeEach(module('ui.timepicker'));
    describe('simple use on span element', function() {
        it('should have a timepicker attached', function() {
            inject(function($compile, $rootScope) {
                var element;
                element = $compile("<span ui-timepicker/>")($rootScope);
                expect(element.timepicker).toBeDefined();
            });
        });

        it('should be able to get the date from the model', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<span ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });
                expect(element.timepicker('getTime', aDate)).toEqual(aDate);
            });
        });

        it('should put the date in the model', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<span ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply();
                element.timepicker('setTime', aDate);
                expect($rootScope.x.hour).toEqual(aDate.hour);
                expect($rootScope.x.minute).toEqual(aDate.minute);
            });
        });

    });
});
