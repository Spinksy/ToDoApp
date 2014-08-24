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
	},
	// connect: {
    // server: {
      // options: {
        // port: 9001,
        // base: 'ToDoApp'
      // }
    // }
  // },
  // connect: {
      // options: {
        // port: 9000,
        // //hostname: 'localhost',
        // //livereload: 35729,
		// base: 'ToDoApp'
      // },
  // }
  
  connect: {
    server: {
      options: {
        port: 9001,
        base: 'ToDoApp'
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', 'Running the server and watch tasks', function(){
	grunt.task.run([
		'connect:server',
		'watch'
	]);
  });
};