/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to use template property & _.template method
 * 2. How to call render method and about onRender event
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  /**
   * HTMLTemplate holds the HTML string which is passed to _.template
   */
  var HTMLTemplate = "<h1>Hello World!</h1><h2>My name is Ashwin Hegde</h2>";

  var MasterView = Marionette.ItemView.extend({

    el: "#container",

    /**
     * template function for the view; underscore templates method is used to compile the template
     */
    template: _.template(HTMLTemplate),

    /**
     * onBeforeRender method gets called automatically before the render method executes
     */
    onBeforeRender: function() {
      console.log("LOG: onBeforeRender method got called!");
    },

    /**
     * onRender method gets called automatically after the render method executes
     */
    onRender: function() {
      console.log("LOG: onRender method got called!");
    }

  });

  /**
   * Creating the instance and calling render method on the fly
   */
  new MasterView().render();

  app.start();

})();
