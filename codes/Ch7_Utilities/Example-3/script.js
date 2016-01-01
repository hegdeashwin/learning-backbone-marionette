/**
 * The goal of this file is to provide the basic understanding of
 * 1. Using Marionette.normalizeMethods
 */
(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MasterView = Marionette.ItemView.extend({

    initialize: function() {

      this.sayHello = function() {
        return "Hello World!";
      };

      this.sayHi = function() {
        return "Hi Ashwin!";
      };

      /**
       * `eventOne` will become a reference to `this.sayHello` and same applies for `eventTwo`
       */
      var hash = {
        eventOne: "sayHello",
        eventTwo: this.sayHi
      };

      this.normalizedHash = this.normalizeMethods(hash);

      console.log("LOG: Calling eventOne normalizedHash - ", this.normalizedHash.eventOne());

      console.log("LOG: Calling eventTwo normalizedHash - ", this.normalizedHash.eventTwo());

    }

  });

  new MasterView();

  app.start();

})();
