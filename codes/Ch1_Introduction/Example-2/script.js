/**
 * The goal of this file is to provide the basic understanding of
 * 1. Know about application object events
 * 2. How to pass object to application start method
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({

    /**
     * The options parameter is passed throught the app while creating app instance
     */
    initialize: function(options) {
      console.log("LOG: Marionette application got initialized");
      console.log("LOG: Application options - ", options);
    }
  });

  /**
   * Create a application object to store project meta info
   */
  var AppOptions = {
    project: {
      codename: "my-app",
      version: 1
    }
  };

  /**
   * Pass the application object to app while creating app instance
   */
  app = new app(AppOptions);

  /**
   * Application object subscribe few events, these events can be used to perform some
   * additional task for the application say eg. pre processing some data etc.
   *
   * `before:start` gets automatically triggered just before the application start and before the initializers
   * The options parameter is passed throught the start method of the application object
   */
  app.on("before:start", function(options) {
    console.log("LOG: before:start application event got called");
    console.log("LOG: before:start options - ", options);
  });

  /**
   * `start` get automatically triggered after the application has started and after the initializers has been executed.
   */
  app.on("start", function(options) {
    console.log("LOG: start application event got called");
    console.log("LOG: start options - ", options);
  });

  /**
   * Create a start object to store meta info
   */
  var initConfigOptions = {
    apikey: "3a-6e-0c-ac-cc-0e-a9-94"
  };

  /**
   * Start the application with the initial start object.
   */
  app.start(initConfigOptions);

})();
