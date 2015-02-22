import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['reporter'],
    sortAscending: true,
    actions: {
        sortBy: function(property) {
            console.log('new sort property: ' + property);

            if(this.get('sortProperties').get(0) === property) {
                console.log('toggling sortAscending');
                this.toggleProperty('sortAscending');

                this.set('sortProperties', [property]);
            } else {
                this.set('sortAscending', true);
                this.set('sortProperties', [property]);
            }

        }
    }

});
