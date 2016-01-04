/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to destroy ItemView
 * 2. Know about default destroy events gets triggered
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MasterView = Marionette.ItemView.extend({

    el: "#container",

    template: "#container",

    events: {
      "click button": "destroyFunc"
    },

    destroyFunc: function() {
      console.log("LOG: Got confirmation to destroy ItemView");

      /**
       * This method will destroy the current ItemView and trigger `onBeforeDestroy` and `onDestroy` events
       */
      this.destroy();
    },

    /**
     * onBeforeDestroy method gets called automatically before the ItemView method executes
     */
    onBeforeDestroy: function() {
      console.log("LOG: onBeforeDestroy method got called!");
    },

    /**
     * onRender method gets called automatically after the ItemView method executes
     */
    onDestroy: function() {
      console.log("LOG: onDestroy method got called!");
    }

  });

  /**
   * Creating the instance and calling render method on the fly
   */
  new MasterView().render();

  app.start();

})();
