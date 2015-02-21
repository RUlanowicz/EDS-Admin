import Ember from 'ember';

export default Ember.Component.extend({
    show: false,
    actions: {
        expand: function(){
            this.set('show', !this.get('show'));
        }
    }
});
