import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        delete: function() {
            this.sendAction('action', report);
        }
    }
});
