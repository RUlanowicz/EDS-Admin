import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortAscending: true,
    sortProperties: ['reporter'],
    actions: {
        sortBy: function(property) {
            this.set('sortProperties', [property]);
            this.set('sortAscending', !this.get('sortAscending'));
        }

    }

});
