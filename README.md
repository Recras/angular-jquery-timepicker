angular-jquery-timepicker [![Build Status](https://travis-ci.org/Recras/angular-jquery-timepicker.png?branch=master)](https://travis-ci.org/Recras/angular-jquery-timepicker)
=====================

An AngularJS directive for [jquery-timepicker](https://github.com/jonthornton/jquery-timepicker)

[See a demo here](http://recras.github.io/angular-jquery-timepicker/)

# Requirements

- AngularJS
- JQuery
- [jquery-timepicker](https://github.com/jonthornton/jquery-timepicker)

# Usage

You can use Bower to install this directive.

    bower install angular-jquery-timepicker

Add the timepicker module as a dependency to your applicatin module:

    var myAppModule = angular.module('MyApp', ['ui.timepicker'])


Apply the directive to your form elements. This directive expects ng-model to be a valid javascript Date object.

    <input ui-timepicker ng-model="someDateObject">


Adding custom options to timepicker.

    $scope.timePickerOptions = {
        step: 20,
        timeFormat: 'g:ia',
        appendTo: 'body'
    };

    <input ui-timepicker="timePickerOptions" ng-model="someDateObject">
