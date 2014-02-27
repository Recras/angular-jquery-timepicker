angular-jquery-timepicker
=====================

An AngularJS directive for jQueryUI Timepicker (https://github.com/jonthornton/jquery-timepicker)

# Requirements

- AngularJS
- JQuery
- [jquery-timepicker](https://github.com/jonthornton/jquery-timepicker)

# Usage

You can use Bower to install this directive.

Add the timepicker module as a dependency to your applicatin module:

    var myAppModule = angular.module('MyApp', [''ui.timepicker'])
    

Apply the directive to your form elements. This directive expects ng-model to be a valid javascript Date object.
**Watch Out**: angular-jquery-timepicker currently doesn't work on <input> elements, see [this issue](https://github.com/Recras/angular-jquery-timepicker/issues/2) for more information.

    <span ui-timepicker ng-model="someDateObject">

