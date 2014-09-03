/* jshint undef: true, unused: true */
/* global module */
'use strict';

var pathogen = require('pathogen');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    srcPkg: grunt.file.readJSON('./node_modules/dashjs/package.json'),

    exec: {
      srcDepInstall: {
        cmd: 'cd ' + pathogen.sys('./node_modules/dashjs') + ' && npm install'
      },
      srcPkg: {
        cmd: 'grunt --base ' + pathogen.sys('./node_modules/dashjs') + ' --gruntfile ' + pathogen.sys('./node_modules/dashjs/Gruntfile.js') + ' uglify'
      },
      cpSrcBundle: {
        cmd: 'cp ' + pathogen.sys('./node_modules/dashjs/dash.all.js') + ' ' + 'index.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['exec:srcDepInstall', 'exec:srcPkg', 'exec:cpSrcBundle']);
};
