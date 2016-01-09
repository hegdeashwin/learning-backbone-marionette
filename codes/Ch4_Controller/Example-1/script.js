/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to create Marionette Controller
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
  });

  /**
   * Create a Marionette controller by extend Marionette.Controller method
   */
  var MasterController = Marionette.Controller.extend({
    initialize: function() {
      console.log("LOG: Controller got initialize!");
    },

    home: function() {
      console.log("LOG: This is home action!");
    },

    dashboard: function() {
      console.log("LOG: This is dashboard action!");
    }
  });

  /**
   * Create a router by extending Marionette AppRouter method
   */
  var Router = Marionette.AppRouter.extend({

    /**
     * App routers can only use one controller object
     */
    controller: new MasterController(),

    appRoutes: {
      "": "home",
      "dashboard": "dashboard"
    },

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
      "": "home",
      "dashboard": "dashboard" // Route #dashboard
    }

  });

  /**
   * Create Router instance
   */
  new Router();

  app.start();

})();
