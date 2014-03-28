require.config({
    //baseUrl: 'http://localhost/backbone/js',
    paths: {
        "jquery": "jquery-1.10.2.min",
        "underscore": "underscore",
        "router": "router",
        'backbone': 'backbone',
        "templates": "../views/",
        "modes": "../modes/",
        "collections": "../collections/"
    },
    
    shim: {
        'underscore':{exports:'_' },  
        'backbone': {deps:['underscore'], exports: 'Backbone' }  
    }
    
});
require(['router', 'backbone'], function(Router, Backbone) {
    var router = new Router();
    Backbone.history.start({pushState: true});
});