/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'eds-admin',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
        'default-src': "'none'",
        'script-src': "'self'",// 'unsave-eval' http://maps.gstatic.com http://maps.googleapis.com http://mt1.googleapis.com http://mt0.googleapis.com",
        'font-src': "'self'",// http://fonts.gstatic.com",
        'connect-src': "'self'",
        'img-src': "'self'", // http://mt1.googleapis.com http://mt0.googleapis.com http://maps.gstatic.com",
        'style-src': "'self'",
        'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    googleMap: {
        // libraries: []
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
