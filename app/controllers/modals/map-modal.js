import Ember from 'ember';

export default Ember.ObjectController.extend({
    marker: function() {
        console.log(this.get('lng'));
        console.log(this.get('lat'));
        return [{
            lng: this.get('lng'),
            lat: this.get('lat')
        }];
    }.property('lng', 'lat')
});
