import Ember from 'ember';

export default Ember.ObjectController.extend({
    markers: function() {
        return [this.get('model')];
    }.property('model')
});
