require.config({
    //baseUrl: 'http://localhost/backbone/js',
    paths: {
        "jquery": "jquery-1.10.2.min",
        "underscore": "underscore",
        "router": "router",
        "backbone": 'backbone',
        "text": "text",
        "views": "views",
        "models": "models",
        "collections": "collections",
        "templates": "../templates"
    },
    
    shim: {
        'underscore':{exports:'_' },  
        'backbone': {deps:['underscore'], exports: 'Backbone' },
        'templates': {deps: ['text'], exports: "templates"}
    }
    
});
require(['router', 'backbone'], function(Router, Backbone) {
    var router = new Router();
    Backbone.history.start();
});