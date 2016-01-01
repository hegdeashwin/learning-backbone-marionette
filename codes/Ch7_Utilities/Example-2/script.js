/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to trigger an event and its corresponding method
 */
(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MasterView = Marionette.ItemView.extend({

    /**
     * When an event is triggered, the first letter of each section of the event name is
     * capitialized, and the word `on` is tagged on to the front of it.
     */
    onSayHello: function(msg) {
      console.log("LOG: ", msg);
    },

    initialize: function() {

      /**
       * This will call `onSayHello` method (on{name}) and pass the "String" message
       */
      this.triggerMethod("sayHello", "Hello World!");
    }

  });

  new MasterView();

  app.start();

})();
