/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to use Marionette LayoutView method
 * 2. How to divide the view in to logic regions
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  /**
   * Creates Header Item view to hold header-template including header events binding
   * As no `el` reference is provided #header-template will be rapped by div by default
   */
  var HeaderView = Marionette.ItemView.extend({
    template: "#header-template"
  });

  /**
   * Creates Content Item view to hold content-template including content events binding
   * As no `el` reference is provided #content-template will be rapped by div by default
   */
  var ContentView = Marionette.ItemView.extend({
    template: "#content-template"
  });

  /**
   * Creates Footer Item view to hold footer-template including footer events binding
   * As no `el` reference is provided #footer-template will be rapped by div by default
   */
  var FooterView = Marionette.ItemView.extend({
    template: "#footer-template"
  });

  /**
   * Creates Master LayoutView hold container-template which includes header, section and footer
   */
  var MasterLayoutView = Marionette.LayoutView.extend({

    el: '#main-container',

    /**
     * This will act as parent to above ItemViews
     */
    template: "#container-template",

    /**
     * Divided the "container-template" view in to logic regions;
     * As the container-template has header, section and footer as an element, so just assign it as value
     * it can be selector or elements; The key will be used down below to use show method
     */
    regions: {
      header: "header",
      section: "section",
      footer: "footer"
    }

  });

  /**
   * Create an instance of MasterLayoutView using `new` and call render method to get the container-template
   * and its regions
   */
  var masterLayout = new MasterLayoutView();
  masterLayout.render();

  /**
   * Use instance regions show method and pass instance of respected ItemView
   */
  masterLayout.header.show(new HeaderView());
  masterLayout.section.show(new ContentView());
  masterLayout.footer.show(new FooterView());

  app.start();

})();
