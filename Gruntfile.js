module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'js/objects/*.js', // All JS in the vendor folder
                    'js/main.js'
                ],
                dest: 'js/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'js/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img-pre/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },

        compass: {
          dist: {
            options: {
              sassDir: 'sass',
              cssDir: 'css',
              config: 'config.rb'
            }
          }
        },

        // jekyll: {
        //   options: {                          
        //     config: '_config.yml'
        //   },
        
        //   serve: {
        //     options: {
        //       serve: true,
        //       port: 4000
        //     }
        //   }
        // },
 

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            sass: {
                files: ['sass/**/**/*'],
                tasks: ['compass:dist'],
                options: {
                    livereload: true,
                    spawn: false,
                },
            },
            css: {
                files: ['*.css'],
                options: {
                    livereload: true,
                    spawn: false,
                },
            },
            // jekyll: {
            //     files: ['/*.html'],
            //     tasks: ['jekyll:serve']
            // }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'compass', 'watch']);

};



