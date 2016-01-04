/**
 * The goal of this file is to provide the basic understanding of
 * 1. Subscribing and triggering events internal - 1 way
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyObject = Marionette.Object.extend({

    initialize: function() {
      console.log("LOG: Object got initialize");

      /**
       * Subscribe `sayHello` event
       */
      this.on("sayHello", this.sayHelloFunc);

      /**
       * Triggering `sayHello` event and pass the message string
       */
      this.triggerMethod("sayHello", "Hello World!");
    },

    sayHelloFunc: function(msg) {
      console.log("LOG: Message - ", msg);
    }

  });

  new MyObject();

  app.start();

})();
