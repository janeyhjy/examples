define(['backbone', 'models/test', 'collections/test', 'text!templates/test.html'], 
function(Backbone, TestModel, TestCollection, TestTmpl) {
    var TestView = Backbone.View.extend({
        el: "#container",
        tagName: 'div',
        className:'test',
        //model: TestModel, //当有collection时不需要model
        template: _.template(TestTmpl),
        events: {
            
        },
        initialize: function() {
            var collection = new TestCollection();

            var _this = this;
            
            //get collection data
            collection.fetch({
                success: function(collection1, response) {
                    // console.log(collection1, response);
                    var names = collection.pluck("name");
                    console.log('pluck: ' + names); //1
                    //console.log('get', collection.get('name')); //undefined
                    
                    _this.render(collection);
                    
                    // collection delete
                    _.invoke(collection.test(), 'destroy', {
                        success: function() {
                            //success handle
                        },
                        error: function() {
                            console.log('delete from collection error');
                        }
                    }); 

                },
                error: function() {
                    console.log(2);
                }
            });
            
            //1.create a model 
            //2.add the model to collection

            // collection.create([
            //     {"name": "test1"},
            //     {"name": "test2"},
            //     {"name": "test3"}
            // ], {
            //     success: function() {
            //         console.log('collection create success');
            //         console.log("collection after create: ", collection);
            //     }
            // });

            //get model data

            // this.model.fetch({
            //     success: function(model, data) {
            //         console.log(model, data);
            //     },
            //     error: function() {
            //         console.log('error');
            //     }
            // });

            //update || add

            // this.model.set({"a": 2222});
            // this.model.save();

            //delete urlRoot时有参数

            // this.model.destroy({
            //     success: function(model, response) {
            //         console.log(model, response);
            //         console.log('delete success');
            //     },
            //     error: function() {
            //         console.log('delete error');
            //     }
            // });

            
        },
        render: function(collection) {
            this.$el.html(this.template(collection.models[0]));
            return this;
        }
    });
    return TestView;
});
