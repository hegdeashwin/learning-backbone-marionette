/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to trigger an event and its corresponding method
 */
(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var hash = {
    "click @ui.list": "mylist"
  };

  var ui = {
    "list": "ul"
  };

  /**
   * The method allows to use the @ui syntax within a given key for triggers and events hashes,
   * it swaps the @ui reference with the associated selector.
   */
  var newHashKeys = Marionette.normalizeUIKeys(hash, ui);

  console.log("LOG: new hash keys - ", newHashKeys);

  var newHashValues = Marionette.normalizeUIValues(hash, ui);

  console.log("LOG: new hash values - ", newHashValues);

  app.start();

})();
