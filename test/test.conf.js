 module.exports = function(config) {
    config.set({
        basePath : '..',
        files : [
            JASMINE,
            JASMINE_ADAPTER,
            'bower_components/jquery/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/jquery-timepicker-jt/jquery.timepicker.min.js',
            'src/timepickerdirective.js',
            'test/*.spec.js'
        ],
        singleRun : true
    });
  };



