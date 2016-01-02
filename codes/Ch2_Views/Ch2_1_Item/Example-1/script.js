/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to create ItemView
 * 2. initialized ItemView constructor
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  /**
   * Create an ItemView extending Marionette.ItemView.
   * An `ItemView` is a single item which may be represented as a Backbone Model or Collection.
   */
  var MyView = Marionette.ItemView.extend({

    /**
     * `initialize` is a constructor function which gets called automatically once the instance is created
     */
    initialize: function() {
      console.log("LOG: ItemView got initialize");
    }

  });

  /**
   * Creating MyView instance using `new`
   */
  new MyView();

  app.start();

})();
