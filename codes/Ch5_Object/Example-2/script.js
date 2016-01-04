/**
 * The goal of this file is to provide the basic understanding of
 * 1. Passing options to Object at the time of instance creation
 * 2. Accessing object options using this.options
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyObject = Marionette.Object.extend({

    /**
     * Passing options argument, this options object comes from passing object to MyObject argument at the time of instance creation
     */
    initialize: function(options) {
      console.log("LOG: Object got initialize");
      console.log("LOG: (options) object - ", options);

      this.fetchObjOpt();
    },

    fetchObjOpt: function() {
      /**
       * options can be accessed by using this.options within the object mthods
       */
      console.log("LOG: (this.options) object - ", this.options);
    }

  });

  /**
   * Passing options at the time of instance creating using `new`
   */
  new MyObject({
    "name": "Ashwin Hegde",
    "job": "Software Engineer"
  });

  app.start();

})();
