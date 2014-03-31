define(['backbone', 'models/test', 'collections/test', 'text!templates/test.html'], 
function(Backbone, TestModel, TestCollection, TestTmpl) {
    var TestView = Backbone.View.extend({
        el: "#container",
        tagName: 'div',
        className:'test',
        model: new TestModel(),
        template: _.template(TestTmpl),
        events: {
            
        },
        initialize: function() {
            new TestCollection().fetch();
            /*
            this.model.fetch({
                success: function(model, data) {
                    console.log(model, data);
                },
                error: function() {
                    console.log('error');
                }
            }, );
*/
            this.render();
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });
    return TestView;
});
