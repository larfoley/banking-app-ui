'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'banking-app-ui',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    googleFonts: [
     'Open+Sans:300,400,700',
     'Roboto:300',
     'Bree Serif',
     'NTR',
     'Nunito'
   ],

    APP: {
      // Here you can pass flags/options to your application instance
      host: 'https://nci-online-banking-service.herokuapp.com',
      namespace: 'api'
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
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      // enabled: false
    };
  }

  ENV['ember-cli-mirage'] = {
    enabled: false
  };


  return ENV;
};
