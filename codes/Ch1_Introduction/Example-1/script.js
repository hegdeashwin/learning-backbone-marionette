(function() {
  'use strict';

  var app = Marionette.Application.extend({
    initialize: function(options) {
      console.log("LOG: Marionette application got initialized");
      console.log("LOG: Application options: ", options);
    }
  });

  app = new app({
    apikey: "3a-6e-0c-ac-cc-0e-a9-94",
    projectName: "MyApps"
  });

})();
