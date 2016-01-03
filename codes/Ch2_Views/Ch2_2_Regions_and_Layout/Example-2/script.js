(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var HeaderView = Marionette.ItemView.extend({
    el: ".headerMenu",

    template: "#header-template"
  });

  var ContentView = Marionette.ItemView.extend({
    el: ".contentMenu",

    template: "#content-template"
  });

  var FooterView = Marionette.ItemView.extend({
    el: ".footerMenu",

    template: "#footer-template"
  });

  var MasterLayoutView = Marionette.LayoutView.extend({

    el: '#main-container',

    template: "#container-template",

    regions: {
      header: "header",
      section: "section",
      footer: "footer"
    }

  });

  var masterLayout = new MasterLayoutView();
  masterLayout.render().el;

  masterLayout.header.show(new HeaderView());
  masterLayout.section.show(new ContentView());
  masterLayout.footer.show(new FooterView());

  app.start();

})();
