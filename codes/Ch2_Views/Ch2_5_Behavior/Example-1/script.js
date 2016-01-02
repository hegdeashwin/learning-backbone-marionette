(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();
  app.start();

  var MyBehavior = Marionette.Behavior.extend({
    initialize: function() {
      console.log("LOG: Behavior view got initialize");
    }
  });

  new MyBehavior();

})();
