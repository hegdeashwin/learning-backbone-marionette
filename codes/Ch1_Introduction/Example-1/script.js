/**
 * The goal of this file is to provide the basic understanding of
 * 1. Create instance of Marionette.Application container
 * 2. How to start your application?
 * 3. Initialize application constructor
 * 4. Setting application options
 */

(function() {
  'use strict';

  /**
   * Create a application by extending Marionette.Application
   */
  var app = Marionette.Application.extend({

    /**
     * `initialize` is a constructor which gets called immediately after the application instance is created.
     * Application object is passed in initialize argument as options
     */
    initialize: function(options) {
      console.log("LOG: Marionette application got initialized");
      console.log("LOG: Application options: ", options);
    }
  });

  /**
   * Create the application instance with `new` and pass optional application object
   * say suppose to cache apikey, projectName etc.
   */
  app = new app({
    apikey: "3a-6e-0c-ac-cc-0e-a9-94",
    projectName: "MyApps"
  });

  /**
   * Start the application, after the application configuration id done.
   * It takes a optional argument
   */
  app.start();

})();
