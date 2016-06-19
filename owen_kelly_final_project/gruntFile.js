module.exports = function(grunt){
  grunt.initConfig({
    jst: {
      compile: {
        options: {
          namespace: 'JST',
          processName: function (filepath) {
            return filepath.replace(/(public\/js\/templates\/|\.tpl)/ig, '');
          }
        },
        files: {
          'public/js/templates/templates.js': 'public/js/templates/*.tpl'
        }
      }
    },
    browserify: {
      app: {
        src: 'public/js/main.js',
        dest: 'public/js/main.bundled.js'
      }
    },
    watch: {
      scripts: {
        files: ['**/*.tpl'],
        tasks: ['jst']
      },
      scripts: {
        files: ['**/*.js'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['jst', 'browserify']);
};
