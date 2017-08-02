module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dev: ['./public/**']
    },

    // copy files
    copy: {
      dev: {
        files: [
          // Copy favicon.ico to public dir
          {
            expand: true,
            cwd: './src/assets',
            src: ['favicon.ico'],
            dest: './public'
          },

          // Copy bootstrap stuff to public dir
          {
            expand: true,
            cwd: './node_modules/bootstrap/dist',
            src: ['**/*'],
            dest: './public/bootstrap'
          },

          // Copy jQuery lib public dir
          {
            expand: true,
            cwd: './node_modules/jquery/dist',
            src: ['jquery.min.js'],
            dest: './public/js'
          }
        ]
      }
    },

    // run sass compiler
    sass: {
      dev: {
        options: {
          style: 'minified'
        },

        files: [{
          expand: true,
          cwd: 'src/assets/scss/',
          src: ['styles.scss'],
          dest: './public/css',
          ext: '.css'
        }]
      }
    },

    // watch files for changes
    watch: {
      assets: {
        files: ['src/assets/**/*'],
        tasks: ['compileAssets']
      }
    },

    execute: {
      target: {
        src: ['bin/www']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', [
    'compileAssets',
    'watch'
  ]);

  grunt.registerTask('compileAssets', [
    'clean:dev',
    'sass:dev',
    'copy:dev'
  ]);
}
