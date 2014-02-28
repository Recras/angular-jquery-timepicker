module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['jshint', 'uglify', 'karma']);

    var testConfig = function(configFile, customOptions) {
        var options = { configFile: configFile, keepalive: true };
        var travisOptions = process.env.TRAVIS && { browsers: ['Firefox'], reporters: 'dots' };
        return grunt.util._.extend(options, customOptions, travisOptions);
    };


    // Project configuration.
    grunt.initConfig({
        karma: {
            unit: {
                options: testConfig('test/test.conf.js')
            }
        },
        jshint:{
            files:['src/timepickerdirective.js', 'test/**/*.js'],
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                globals:{}
            }
        },
        uglify: {
            dist: {
                files: {
                    'src/timepickerdirective.min.js': ['src/timepickerdirective.js']
                }
            }
        }
    });

};