(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var HeaderView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("LOG: Header view got initialize");
    },

    template: "#headerSection"
  });

  var ContentView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("LOG: Content view got initialize");
    },

    template: "#contentSection"
  });

  var FooterView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("LOG: Footer view got initialize");
    },

    template: "#footerSection"
  });

  var MasterLayoutView = Marionette.LayoutView.extend({
    el: "#page-template",

    template: "#containerSection",

    regions: {
      header: ".headerSection",
      content: ".contentSection",
      footer: ".footerSection"
    }

  });

  app.layoutView = new MasterLayoutView();
  app.layoutView.render();

  app.layoutView.getRegion('header').show(new HeaderView());
  app.layoutView.getRegion('content').show(new ContentView());
  app.layoutView.getRegion('footer').show(new FooterView());

  app.start();

})();
