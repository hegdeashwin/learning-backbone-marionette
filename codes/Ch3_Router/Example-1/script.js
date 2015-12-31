(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  app.on("start", function(options) {
    Backbone.history.start();
    console.log("LOG: Backbone history is started!");
  });

  var Router = Marionette.AppRouter.extend({

    routes: {
      "": function() {
        console.log("LOG: Blank route got called");
      },
      "dashboard": "dashboard",
      "about": "about"
    },

    dashboard: function() {
      console.log("LOG: Dashboard route got called");
    },

    about: function() {
      console.log("LOG: About route got called");
    }

  });

  new Router();

  app.start();

})();
