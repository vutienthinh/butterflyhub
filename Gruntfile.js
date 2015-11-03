module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - built on <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      views: 'source/views/',
      assets: 'source/assets/',
      build: 'static/',
      doc: 'document/',
      bower: 'bower_components/'
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: '<%= meta.views %>',
          src: ['**/*.jade', '!blocks/**', '!layouts/**', '!mixins/**'],
          dest: '<%= meta.build %>',
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          compress: false
        },
        files: [{
          '<%= meta.build %>css/libs.css': '<%= meta.assets %>css/libs.scss',
          '<%= meta.build %>css/style.css': '<%= meta.assets %>css/style.scss',
          // '<%= meta.build %>css/ie.css': '<%= meta.assets %>css/ie.less',
          '<%= meta.build %>css/base.css': '<%= meta.assets %>css/base.scss'
        }]
      }
    },
    concat: {
      dist: {
        files: [{
          '<%= meta.build %>js/modernizr.js': ['<%=meta.bower %>modernizr/modernizr.js','<%= meta.assets %>js/libs/detectizr.js'],
          '<%= meta.build %>js/libs.js': ['<%=meta.bower %>jquery/dist/jquery.min.js', '<%=meta.bower %>slick-carousel/slick/slick.min.js', '<%= meta.assets %>js/libs/plugins/*.js'],
          '<%= meta.build %>js/l10n.js': '<%= meta.assets %>js/l10n.js',
          '<%= meta.build %>js/script.js': ['<%= meta.assets %>js/site.js', '<%= meta.assets %>js/plugins/*.js']
        }]
      }
    },
    copy: {
      data: {
        files: [{
          expand: true,
          cwd: '<%= meta.views %>data/',
          src: ['**', '!*.jade'],
          dest: '<%= meta.build %>data/'
        }]
      },
      fonts: {
        files: [{
          expand: true,
          cwd: '<%= meta.assets %>fonts/',
          src: '**',
          dest: '<%= meta.build %>fonts/'
        }]
      },
      icons: {
        files: [{
          expand: true,
          cwd: '<%= meta.assets %>icons/',
          src: '**',
          dest: '<%= meta.build %>'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: '<%= meta.assets %>images/',
          src: '**',
          dest: '<%= meta.build %>images/'
        }]
      },
      media: {
        files: [{
          expand: true,
          cwd: '<%= meta.assets %>media/',
          src: '**',
          dest: '<%= meta.build %>media/'
        }]
      },
      htaccess: {
        files: [{
          expand: true,
          cwd: '<%= meta.assets %>tmp/',
          src: '.htaccess',
          dest: '<%= meta.build %>'
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: ['<%= meta.assets %>js/plugins/*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      files: ['<%= meta.build %>css/style.css']
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      files: ['<%= meta.build %>*.html']
    },
    jadelint: {
      options: {
        jadelintrc: '.jadelintrc'
      },
      files: ['<%= meta.views %>**/*.jade']
    },
    watch: {
      options: {
        spawn: false,
        interrupt: false,
        livereload: true
      },
      js: {
        files: ['<%= meta.assets %>js/plugins/*.js', '<%= meta.assets %>js/*.js'],
        tasks: ['jshint', 'concat']
      },
      jade: {
        files: ['<%= meta.views %>**/*.jade'],
        tasks: ['jadelint', 'jade', 'htmlhint']
      },
      data: {
        files: ['<%= meta.views %>data/**'],
        tasks: ['copy:data']
      },
      sass: {
        files: ['<%= meta.assets %>css/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csslint']
      },
      fonts: {
        files: ['<%= meta.assets %>fonts/**'],
        tasks: ['copy:fonts']
      },
      icons: {
        files: ['<%= meta.assets %>icons/**'],
        tasks: ['copy:icons']
      },
      images: {
        files: ['<%= meta.assets %>images/**'],
        tasks: ['copy:images']
      },
      media: {
        files: ['<%= meta.assets %>media/**'],
        tasks: ['copy:media']
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= meta.build %>images/',
          src: '**/*.{png,jpg,gif}',
          dest: '<%= meta.build %>images/'
        }]
      }
    },
    cssmin: {
      options: {
        advanced: false,
        keepSpecialComments: false,
        compatibility: 'ie8'
      },
      compress: {
        files: [{
          '<%= meta.build %>css/libs.css': '<%= meta.build %>css/libs.css',
          '<%= meta.build %>css/style.css': '<%= meta.build %>css/style.css',
          '<%= meta.build %>css/ie.css': '<%= meta.build %>css/ie.css',
          '<%= meta.build %>css/print.css': '<%= meta.build %>css/print.css'
        }]
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>',
        compress: true,
        beautify: false,
        preserveComments: false
      },
      dist: {
        files: [{
          '<%= meta.build %>js/modernizr.js': ['<%=meta.bower %>modernizr/modernizr.js','<%= meta.assets %>js/libs/detectizr.js'],
          '<%= meta.build %>js/libs.js': ['<%=meta.bower %>jquery/dist/jquery.min.js', '<%=meta.bower %>slick-carousel/slick/slick.min.js', '<%= meta.assets %>js/libs/plugins/*.js'],
          '<%= meta.build %>js/l10n.js': '<%= meta.assets %>js/l10n.js',
          '<%= meta.build %>js/script.js': ['<%= meta.assets %>js/site.js', '<%= meta.assets %>js/plugins/*.js']
        }]
      }
    },
    autoprefixer: {
      options: {
        map: {
          prev: true
        },
        browsers: ['last 3 versions']
      },
      files: {
        expand: true,
        src: '<%= meta.build %>css/*.css'
      }
    },
    markdownpdf: {
      files: {
        src: ['*.md'],
        dest: '<%= meta.doc %>'
      }
    },
    nodemon: {
      dev: {
        options: {
          ignore: ['node_modules/**', '<%= meta.assets %>js/**'],
          ext: 'js',
          watch: ['server'],
          delay: 1
        },
        script: 'source/server.js'
      }
    },
    concurrent: {
      options: {
        limit: 2
      },
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['nodemon', 'watch']
      }
    },
    qunit: {
      all: ['test/**/*.html']
    },
    clean: {
      options: {
        force: true
      },
      build: ['static']
    }
  });
  grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
  require('time-grunt')(grunt);
  grunt.registerTask('build', ['clean', 'concat', 'sass', 'jadelint', 'jade', 'copy', 'autoprefixer', 'htmlhint', 'jshint', 'csslint']);
  grunt.registerTask('default', ['build', 'concurrent']);
  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('doc', ['markdownpdf']);
  grunt.registerTask('release', ['build', 'test', 'imagemin', 'uglify', 'cssmin']);
};
