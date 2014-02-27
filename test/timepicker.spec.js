
/*global describe, beforeEach, afterEach, it, inject, expect, module, dump, $*/
describe('uiDate', function() {
    'use strict';
    beforeEach(module('ui.timepicker'));
    describe('simple use on span element', function() {
        it('should have a timepicker attached', function() {
            inject(function($compile, $rootScope) {
                var element;
                element = $compile("<input ui-timepicker/>")($rootScope);
                expect(element.timepicker()).toBeDefined();
            });
        });
    });
});
