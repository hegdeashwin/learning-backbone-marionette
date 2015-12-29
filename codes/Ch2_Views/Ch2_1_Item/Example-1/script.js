(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();
  app.start();

  var MyView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("LOG: ItemView got initialize");
    }
  });

  new MyView();

})();
