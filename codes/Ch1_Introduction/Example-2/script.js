(function() {
  'use strict';

  var app = Marionette.Application.extend({
    initialize: function(options) {
      console.log("LOG: Marionette application got initialized");
      console.log("LOG: Application options - ", options);
    }
  });

  var AppOptions = {
    project: {
      codename: "my-app",
      version: 1
    }
  };

  app = new app(AppOptions);

  app.on("before:start", function(options) {
    console.log("LOG: before:start application event got called");
    console.log("LOG: before:start options - ", options);
  });

  app.on("start", function(options) {
    console.log("LOG: start application event got called");
    console.log("LOG: start options - ", options);
  });

  var initConfigOptions = {
    apikey: "3a-6e-0c-ac-cc-0e-a9-94"
  };
  app.start(initConfigOptions);

})();
