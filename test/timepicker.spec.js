
/*global describe, beforeEach, afterEach, it, inject, expect, module, dump, $*/
describe('uiTimepicker', function() {
    'use strict';
    beforeEach(module('ui.timepicker'));
    describe('simple use on span element', function() {
        it('should not work without ngModel', function() {
            inject(function($compile, $rootScope) {
                expect(function() { $compile("<span ui-timepicker/>")($rootScope); }).toThrow();
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
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });
                element.timepicker('setTime', aDate);
                expect($rootScope.x.hour).toEqual(aDate.hour);
                expect($rootScope.x.minute).toEqual(aDate.minute);
            });
        });

    });

    describe('simple use on input element', function() {
        it('should not work without ngModel', function() {
            inject(function($compile, $rootScope) {
                expect(function() { $compile("<input ui-timepicker/>")($rootScope); }).toThrow();
            });
        });

        it('should be able to get the date from the model', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
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
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });
                element.timepicker('setTime', aDate);
                expect($rootScope.x.hour).toEqual(aDate.hour);
                expect($rootScope.x.minute).toEqual(aDate.minute);
            });
        });

        it('should mark model valid for valid user input', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });

                element.val('05:30').trigger('input');
                expect(element.hasClass('ng-invalid-time')).toBe(false);
            });
        });

        it('should mark model invalid for invalid user input', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });

                element.val('abcd').trigger('input');
                expect(element.hasClass('ng-invalid-time')).toBe(true);
            });
        });

        it('should mark model invalid for blank input when required', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker required ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });

                element.val('').trigger('input');
                expect(element.hasClass('ng-invalid-time')).toBe(true);
            });
        });

        it('should mark model valid for blank input when not required', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });

                element.val('').trigger('input');
                expect(element.hasClass('ng-invalid-time')).toBe(false);
            });
        });
        
        it('should be able to reset input value when model is reset to null', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });

                $rootScope.$apply(function() {
                    $rootScope.x = null;
                });

                expect(element.val()).toEqual('');
            });
        });
    });

    describe('when ngModel is a moment', function() {
        beforeEach(function () {
            angular.module('ui.timepicker').value('uiTimepickerConfig', {
                step: 5,
                asMoment: true
            });
        });

        it('should be able to get the date from the model', function() {
            inject(function($compile, $rootScope) {
                var element, aMoment;
                aMoment = moment("2010-12-01 07:14:00");
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aMoment;
                });
                expect(element.timepicker('getTime', aMoment)).toEqual(aMoment.toDate());
                $rootScope.$apply(function() {
                   expect(moment.isMoment($rootScope.x)).toBeTruthy();
                });
            });
        });
    });

    describe('using custom options', function() {
        it('should work with custom options', function() {
            inject(function($compile, $rootScope) {
                var element, aDate, opts;
                aDate = new Date(2010, 12, 1, 14, 15);
                opts = {
                    timeFormat: 'H:i',
                };
                $rootScope.$apply(function() {
                    $rootScope.opts = opts;
                });
                element = $compile("<input ui-timepicker='opts' ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });
                expect(element.val()).toEqual('14:15');
            });
        });
    });

    describe('using required', function() {
        it('should be valid if not required and blank', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = '';
                });
                expect(element.hasClass('ng-valid')).toBe(true);
                expect(element.hasClass('ng-invalid')).toBe(false);
            });
        });

        it('should be invalid if required and blank', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                element = $compile("<input ui-timepicker ng-model='x' required/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = '';
                });
                expect(element.hasClass('ng-valid')).toBe(false);
                expect(element.hasClass('ng-invalid')).toBe(true);
            });
        });

        it('should be valid if not required and input is cleared', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });

                element.val('').trigger('input');
                expect(element.hasClass('ng-valid')).toBe(true);
                expect(element.hasClass('ng-invalid')).toBe(false);
            });
        });

        it('should be invalid if required and input is cleared', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                aDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x' required/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });

                element.val('').trigger('input');
                expect(element.hasClass('ng-valid')).toBe(false);
                expect(element.hasClass('ng-invalid')).toBe(true);
            });
        });
    });

    describe('when ngModel is undefined', function() {
        it('should be able to get the date from the model', function() {
            inject(function($compile, $rootScope) {
                var element, aDate;
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);
                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });
                expect(aDate).toBeUndefined();
                expect(element.timepicker('getTime', aDate)).toEqual(aDate);
            });
        });

        it('should put a new date in the model', function() {
            inject(function($compile, $rootScope) {
                var element, aDate, bDate;
                bDate = new Date(2010, 12, 1, 14, 15);
                element = $compile("<input ui-timepicker ng-model='x'/>")($rootScope);

                $rootScope.$apply(function() {
                    $rootScope.x = aDate;
                });
                expect(aDate).toBeUndefined();
                expect(element.timepicker('getTime', aDate)).toEqual(aDate);

                $rootScope.$apply(function() {
                    $rootScope.x = bDate;
                });
                element.timepicker('setTime', bDate);
                expect($rootScope.x.hour).toEqual(bDate.hour);
                expect($rootScope.x.minute).toEqual(bDate.minute);
            });
        });
    });
});
