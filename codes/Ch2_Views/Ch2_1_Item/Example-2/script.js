(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();
  app.start();

  var MyView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("LOG: ItemView got initialize");
    },

    el: "#container",

    events: {
      "click .showHelloMsg": "showHelloMsg"
    },

    showHelloMsg: function() {
      console.log("LOG: Hello World");
    }

  });

  new MyView();

})();
