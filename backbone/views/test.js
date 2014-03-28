define(['backbone', 'text!templates/test.html'], function(Backbone, TestTmpl) {
    var TestView = Backbone.View.extend({
        el: $("#container"),
        template: TestTmpl,
        events: {
            
        }
        initialize: function() {
            console.log(1);
        },
        render: function() {
            
        }
    });
    return TestView;
});