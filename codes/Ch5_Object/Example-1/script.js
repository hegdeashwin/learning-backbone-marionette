(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyObject = Marionette.Object.extend({

    initialize: function() {
      console.log("LOG: Object got initialize");
    }

  });

  new MyObject();

  app.start();

})();
