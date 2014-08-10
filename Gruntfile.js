/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
     blanket_mocha: {
        test: {
            src: ['test/test.html'],
            options: {
                run: true,
                log: true,
                threshold: 0,
                mocha: {
                    grep: 'wombat'
                }
            }
        }
     }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-blanket-mocha');

  // Default task.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('spec', 'test only matching spec', function (n) {
      var spec = grunt.option('spec');
      grunt.config('mocha.test.options.mocha.grep', spec);
      grunt.task.run('blanket_mocha');
  });

};
