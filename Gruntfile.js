module.exports = function (grunt) {

  grunt.initConfig({
    jst: {
      compile: {
        options: {
          namespace: 'TFT',
          processName: function (filepath) {
            return filepath.replace(/(public\/templates\/|\.tpl)/ig, '');
          }
        },
        files: {
          'public/templates/templates.js': 'public/templates/*.tpl'
        }
      }
    },
    //this will let you use require in a client-side file
    browserify: {
      app: {
        src: 'public/main.js',
        dest: 'public/main.bundled.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-browserify');
  // could add watch task here if desired: http://gruntjs.com/sample-gruntfile
  // could also use to compile less
  grunt.registerTask('default', ['jst', 'browserify']);
};
