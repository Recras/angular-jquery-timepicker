module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['jshint', 'uglify', 'karma']);


    // Project configuration.
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'test/test.conf.js',
                browsers: ['Chrome', 'Firefox']
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