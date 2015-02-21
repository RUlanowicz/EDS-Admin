import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('/reports');
    },
    actions: {
        showModal: function(name, model) {
            console.log('showing modal');
            this.render(name, {
                into: 'application',
                outlet: 'modal',
                model: model
            });
        },
        removeModal: function() {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
