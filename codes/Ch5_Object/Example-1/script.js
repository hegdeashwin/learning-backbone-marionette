/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to create Marionette Object
 * 2. How to create instance of Marionette Object
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  /**
   * Create Object by extending Marionette Object method
   */
  var MyObject = Marionette.Object.extend({

    /**
     * initialize get called automatically once the instance is created
     */
    initialize: function() {
      console.log("LOG: Object got initialize");
    }

  });

  /**
   * Create Object instance using `new`
   */
  new MyObject();

  app.start();

})();
