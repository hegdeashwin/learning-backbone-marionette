(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  app.on("start", function(options) {
    Backbone.history.start();
    console.log("LOG: Backbone history is started!");
  });

  var MyObject = Marionette.Object.extend({

    initialize: function() {
      console.log("LOG: Object got initialize");
    }

  });

  new MyObject();

  app.start();

})();
