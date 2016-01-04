/**
 * The goal of this file is to provide the basic understanding of
 * 1. Subscribing and triggering events on the fly - 2nd way
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyObject = Marionette.Object.extend({

    initialize: function() {
      console.log("LOG: Object got initialize");
    },

    sayHelloFunc: function(msg) {
      /**
       * Triggering `sayHello` event and pass the message string
       */
      this.triggerMethod("sayHello", "Hello World!");
    }

  });

  var myobj = new MyObject();

  /**
   * Subscribe `sayHello` event
   */
  myobj.on("sayHello", function(msg) {
    console.log("LOG: Message - ", msg);
  });

  myobj.sayHelloFunc();

  app.start();

})();
