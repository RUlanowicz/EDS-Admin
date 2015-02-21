import DS from 'ember-data';

var Report = DS.Model.extend({
    images: DS.attr(), // String url []
    type: DS.attr(), // String some constant
    description: DS.attr(), // String
    location: DS.attr() // { lat: x, lng: y }
});

Report.reopenClass({
    FIXTURES: [
        {
            images: [],
            type: "",
            description: "",
            location: {
                lat: 1,
                lng: 1
            }
        }

    ]
});

export default Report;
