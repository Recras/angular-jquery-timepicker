module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['jshint', 'karma']);


    // Project configuration.
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'test/test.conf.js',
                browsers: ['Chrome', 'Firefox']
            }
        },
        jshint:{
            files:['src/**/*.js', 'test/**/*.js'],
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
    });

};