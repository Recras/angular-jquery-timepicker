angular-ui-timepicker
=====================

An AngularJS directive for jQueryUI Timepicker (https://github.com/jonthornton/jquery-timepicker)

# Requirements

- AngularJS
- JQuery
- [jquery-timepicker](https://github.com/jonthornton/jquery-timepicker)

# Usage

You can use Bower to install this directive. Unfortunately, jquery-timepicker can not be installed through Bower at this time. So please make sure that you have jquery-timepicker.

Add the timepicker module as a dependency to your applicatin module:

    var myAppModule = angular.module('MyApp', ['ui.date'])
    

Apply the directive to your form elements. This directive expects ng-model to be a valid javascript Date object.

    <span ui-timepicker ng-model="someDateObject">
