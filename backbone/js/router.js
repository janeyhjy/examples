define(['backbone'], function(Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "search": "search",   // #search
            "test/:q": "test"     // #help/1
        },
        home: function() {
            require(['views/test', 'models/test'], function(TestView, TestModel) {
                new TestView();  
            })
        },
        search: function() {
            console.log(2);
        },
        test: function(q) {
            console.log("test");
        }
    });
    return Router;
});