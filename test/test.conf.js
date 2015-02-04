 module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        basePath : '..',
        files : [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/jquery-timepicker-jt/jquery.timepicker.min.js',
            'bower_components/moment/moment.js',
            'src/timepickerdirective.min.js',
            'test/*.spec.js'
        ],
        singleRun : true,
        browsers: ['Chrome', 'Firefox']
    });
  };



