var app = app || {};

app.youView = Backbone.View.extend({
    el: "#renderHerePlease",
    template: _.template("<%= username %>: <%= messagecount %> messages"),

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})