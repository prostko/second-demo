module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [
          {
            width: 800,
          }]
        },
        files: [{
          expand: true,
          src: ['**.*'],
          cwd: 'assets/development/images',
          custom_dest: 'assets/production/images'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/development/stylesheets/main.css': 'assets/development/stylesheets/main.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['assets/development/stylesheets/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },

    cssmin: {
      target: {
        files: {
          'assets/production/stylesheets/main.min.css': 'assets/development/stylesheets/main.css'
        }
      }
    },

  });

  // -------------------------------------------------------------------------------------

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('resize', ['responsive_images']);

  // -------------------------------------------------------------------------------------

  // 'default' preps all assets for deployment.
  // To run manually, run `grunt default`
  grunt.registerTask('default', ["resize", 'sass', 'cssmin']);
};
