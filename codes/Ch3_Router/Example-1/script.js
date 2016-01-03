/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to create and setup AppRouter
 * 2. How to set routes with dynamic and optional parameters
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  app.on("start", function(options) {

    /**
     * Backbone.history.start will monitor the hashchange events, and dispatch routes
     * It is used onces all the routers have been created and all the routes are setup properly
     * For more info please visite http://backbonejs.org/#History-start
     */
    Backbone.history.start();
    console.log("LOG: Backbone history is started!");
  });

  /**
   * Create a router by extending Marionette AppRouter method
   */
  var Router = Marionette.AppRouter.extend({

    /**
     * initialize will get called automatically once the instance gets created
     */
    initialize: function() {
      console.log("LOG: Router got initialize!");
    },

    /**
     * `routes` is a routes hash that mapped routes to actions
     */
    routes: {
      "": function() { // Route #
        console.log("LOG: Blank route got called");
      },
      "dashboard": "dashboard", // Route #dashboard
      "about": "about", // Route #about
      "book/:pageNo/read": "readBook", // Route #book/45/read, 45 is dynamic value
      "user/(:username)": "profile" // Route #user/ OR #user/username, username is optional
    },

    dashboard: function() {
      console.log("LOG: Dashboard route got called");
    },

    about: function() {
      console.log("LOG: About route got called");
    },

    /**
     * Passes `pageNo` from URL to arguments
     */
    readBook: function(pageNo) {
      console.log("LOG: You are reading book page no ", pageNo);
    },

    /**
     * Passes `username` from URL to arguments if exist else undefined
     */
    profile: function(username) {
      if(!username) {
        console.log("LOG: Hello Guest!");
      } else {
        console.log("LOG: Hello ", username);
      }
    }

  });

  /**
   * Create Router instance
   */
  new Router();

  app.start();

})();
