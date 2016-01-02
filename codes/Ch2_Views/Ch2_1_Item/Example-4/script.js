/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to pass data and template to _.template for data binding
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  /**
   * HTMLTemplate holds the HTML string which is passed to _.template
   * `msg` & `name` will be replaced by data object
   */
  var HTMLTemplate = "<h1><%=msg %></h1><h2>My name is <%=name %></h2>";

  var MasterView = Marionette.ItemView.extend({

    el: "#container",

    /**
     * template function for the view; underscore templates method is used to compile the template
     */
    template: function() {

      /**
       * Passed the data & HTMLTemplate to _.template for data binding
       */
      return _.template(HTMLTemplate)({
        "name": "Ashwin Hegde",
        "msg": "Hello World!"
      });

    },

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
