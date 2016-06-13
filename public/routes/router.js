var app = app || {};

//backbone router stuff
app.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'aboutThis': 'showAboutThis',
        'you': 'showYou'
    },
    home: function () {
        if (app.currentView) { app.currentView.close() };
        app.currentView = new app.homeView().render();
    },
    showAboutThis: function () {
        if (app.currentView) { app.currentView.close() };
        app.currentView = new app.aboutThisView().render();
    },
    showYou: function () {
        if (app.currentView) { app.currentView.close() };
        app.currentView = new app.youView({ model: app.currentUser }).render();
    }
});

//add close function to cleanup listening
Backbone.View.prototype.close = function () {
    this.unbind();
    this.stopListening();
};
