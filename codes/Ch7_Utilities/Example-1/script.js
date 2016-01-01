/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to get object attribute directly
 * 2. How to get object attribute with `this.options`
 */
(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MasterModel = Backbone.Model.extend({

    sayHello: "Hello World!",

    sayHi: "Hi Ashwin!",

    initialize: function(options) {

      /**
       * Set this.options to options to get the object attribute
       */
      this.options = options;

      /**
       * Use Marionette's getOption method to retrieve the object attribute
       */
      var helloMsg = Marionette.getOption(this, "sayHello");
      var hiMsg = Marionette.getOption(this, "sayHi");

      console.log("LOG: ", helloMsg);
      console.log("LOG: ", hiMsg);
    }

  });

  new MasterModel();

  /**
   * Pass object as options to initialize to override the sayHello attribute
   */
  new MasterModel({
    sayHello: "Hello Marionette!"
  });

  app.start();

})();
