(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  var MyObject = Marionette.Object.extend({

    initialize: function() {
      console.log("LOG: Object got initialize");
    },

    sayHelloFunc: function(msg) {
      this.triggerMethod("sayHello", "Hello World!");
    }

  });

  var myobj = new MyObject();

  myobj.on("sayHello", function(msg) {
    console.log("LOG: Message - ", msg);
  });

  myobj.sayHelloFunc();

  app.start();

})();
