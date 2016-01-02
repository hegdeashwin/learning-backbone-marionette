/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to use el and defining scope
 * 2. Binding DOM event with eventhash
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyView = Marionette.ItemView.extend({

    /**
     * el can be a DOM selector string or an element;
     * otherwise it will be created from `tagName`, `className`, `id` and `attributes` properties
     * if `el` is not set then el will be empty `div`
     *
     * It also defines the scope, events can be binded
     */
    el: "#first-container",

    /**
     * `events` or eventshash can be used to specify a set of DOM events that will be
     * mapped to methods on the view (el).
     *
     * click event is binded to DOM element having class .showHelloMsg within "#first-container" el and not outside
     */
    events: {
      "click .showHelloMsg": "showHelloMsg"
    },

    showHelloMsg: function() {
      console.log("LOG: Hello World!");
    }

  });

  new MyView();

  app.start();

})();
