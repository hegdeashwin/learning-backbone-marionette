(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  app.on("start", function(options) {
    Backbone.history.start();
    console.log("LOG: Backbone history is started!");
  });

  var ProfileObj = Marionette.Object.extend({

    initialize: function(options) {
      console.log("LOG: Object got initialize");
      console.log("LOG: options object: ", options);
    }

  });

  new ProfileObj({
    "name": "Ashwin Hegde",
    "job": "Software Engineer",
    "techside": {
      "servers": ["JavaScript", "Python", "Ruby", "Golang", "PHP"],
      "clients": ["HTML", "CSS", "JavaScript", "LESS"],
      "tasks": ["Grunt", "Gulp"],
      "build": ["rjs", "browserify", "webpack"],
      "tests": ["Mocha", "Jasmine", "QUnit"],
      "search": ["Elasticsearch", "Solr"],
      "frameworks": {
        "JavaScript": ["Backbone", "Angular", "React", "Marionette", "Chaplin"],
        "Python": ["Django"],
        "Ruby": ["Rails"],
        "Golang": ["Martini", "Gorilla"],
        "PHP": ["Laravel", "CodeIgniter", "Yii", "CakePHP"]
      }
    }
  });

  app.start();

})();
