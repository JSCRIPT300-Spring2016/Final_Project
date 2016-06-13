module.exports = function (grunt) {
  
  //add a watch task or plugin to update when you make file changes. Not in this version
  
  //define how plugins work
  grunt.initConfig({
    //template compiler
    jst: {
      compile: {
        options: {//compiles all of the templates into one file
          namespace: 'TD',
          processName: function (filepath) {
            //changing the path names
            return filepath.replace(/(public\/js\/templates\/|\.tpl)/ig, '');
          }
        },
        files: {
          //take everything from templates and compile into templates.js file
          'public/js/templates/templates.js': 'public/js/templates/*.tpl'
        }
      }
    },
    //bundles the code for the browswer to use
    browserify: {
      app: {
        src: 'public/js/main.js',//start file for browserify
        dest: 'public/js/main.bundled.js'
      }
    },
    watch: {
      js: {
        files: ['**/*.js'],
        tasks: ['jst','browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['jst', 'browserify']);//default code to run with grunt
  grunt.loadNpmTasks('grunt-contrib-watch');
};
