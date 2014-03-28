define(['backbone', 'text!templates/test.html'], function(Backbone, TestTmpl) {
    var TestView = Backbone.View.extend({
        el: $("#container"),
        initialize: function() {
            console.log(1);
        }
    });
    return TestView;
});