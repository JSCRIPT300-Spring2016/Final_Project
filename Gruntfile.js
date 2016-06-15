module.exports = function (grunt) {

	grunt.initConfig({
		jst: {
			compile: {
				options: {
					namespace: "TFT",
					processName: function (filepath) {
						return filepath.replace(/(public\/js\/templates\/|\.tpl)/ig, "");
					}
				},
				files: {
					"public/js/templates/templates.js": "public/js/templates/*.tpl"
				}
			}
		},
		browserify: {
			app: {
				src: "public/js/main.js",
				dest: "public/js/main.bundled.js"
			}
		},
		watch: {
			files: ["public/js/**/*.js", "!public/js/main.bundled.js", "!public/js/templates/templates.js"],
			tasks: ["jst", "browserify"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jst");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jst", "browserify"]);
};
