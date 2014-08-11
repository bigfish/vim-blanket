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
            src: [],
            options: {
                urls: ['http://localhost:3000/test/test.html?spec='],
                run: true,
                log: true,
                threshold: 0,
                mocha: {
                    //grep: 'wombat'
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
      grunt.verbose.writeln('spec=' + spec);
      //grunt.config('mocha.test.options.mocha.grep', spec);
      //grunt.config('blanket_mocha.test.options.mocha.grep', spec);
      //var runner = grunt.config('blanket_mocha.test.src')[0];
      //runner += '?spec=' + spec;
      //grunt.config('blanket_mocha.test.src', ['foobar']);
      var url = grunt.config('blanket_mocha.test.options.urls')[0];
      grunt.config.set('blanket_mocha.test.options.urls', [url + spec]);
      console.log()
      //grunt.config.set('blanket_mocha.test.src', ['test/test.html?spec=' + spec]);
      //grunt.config.set('blanket_mocha.test.urls', ['test/test.html?foo=bar']);
      //grunt.verbose.writeln(grunt.config('blanket_mocha.test.urls')[0]);
      //grunt.config('blanket_mocha.test.urls', ['test/test.html?spec=' + spec]);
      //grunt.config('mocha.test.options.mocha.spec', spec);
      grunt.task.run('blanket_mocha');
  });

};
