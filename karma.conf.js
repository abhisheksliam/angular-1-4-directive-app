//jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'login/**/*.js',
      'dashboard/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      "karma-html-reporter"
    ],

    reporters: ['html', 'junit', 'progress'],

    junitReporter: {
      outputDir: 'unit_test_output',
      outputFile: 'unit.xml',
      suite: 'unit'
    },

    htmlReporter: {
      outputDir: 'app/unit_test_output'
    }

  });
};
