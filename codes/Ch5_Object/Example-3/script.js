(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyObject = Marionette.Object.extend({

    initialize: function() {
      console.log("LOG: Object got initialize");

      this.on("sayHello", this.sayHelloFunc);

      this.triggerMethod("sayHello", "Hello World!");
    },

    sayHelloFunc: function(msg) {
      console.log("LOG: Message - ", msg);
    }

  });

  new MyObject();

  app.start();

})();
