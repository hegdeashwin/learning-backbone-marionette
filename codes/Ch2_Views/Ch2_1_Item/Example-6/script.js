/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to pass serializeData to _.template for data binding 1 way
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  /**
   * HTMLTemplate holds the HTML string which is passed to _.template
   * `msg` & `name` will be replaced by serializeData object
   */
  var HTMLTemplate = "<h1><%=msg %></h1><h2>My name is <%=name %></h2>";

  var MasterView = Marionette.ItemView.extend({

    el: "#container",

    /**
     * template function for the view; underscore templates method is used to compile the template
     */
    template: _.template(HTMLTemplate),

    /**
     * serializeData to modify Backbone model attributes for display in your views.
     * they must return a valid JSON object and they does not affect the models,
     * it only affects how the models' attributes are prepared for the template.
     *
     * serializeData takes no arguments, and returns an object with keys that
     * should match the keys in your template.
     */
    serializeData: function() {
      return {
        "name": "Ashwin Hegde",
        "msg": "Hello World!"
      };
    }

  });

  /**
   * Creating the instance and calling render method on the fly
   */
  new MasterView().render();

  app.start();

})();
