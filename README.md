angular-jquery-timepicker [![Build Status](https://travis-ci.org/Recras/angular-jquery-timepicker.png?branch=master)](https://travis-ci.org/Recras/angular-jquery-timepicker)
=====================

An AngularJS directive for [jquery-timepicker](https://github.com/jonthornton/jquery-timepicker)

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

