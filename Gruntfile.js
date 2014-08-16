module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.css',
        dest: 'build/<%= pkg.name %>.min.css'
      }
    }, 
	concat: {
		dist: {
			src: ['ToDoApp/app/**/*.js', '!**/*Bundle.js'],
			dest: 'ToDoApp/app/appBundle.js',
			nonull: true,
		},
	},
	watch: {
		files: ['**/*.js', '!**/*Bundle.js'],
		tasks: ['concat'],
		options: {
		  livereload: true,
		},
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};