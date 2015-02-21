import DS from 'ember-data';

var Report = DS.Model.extend({
    reporter: DS.attr(), // String
    dateReported: DS.attr(),
    images: DS.attr(), // String url []
    tags: DS.attr(), // String some constant
    description: DS.attr(), // String
    coords: DS.attr() // { lat: x, lng: y }
});

Report.reopenClass({
    FIXTURES: [
        {
            id: 1,
            images: [],
            type: "",
            description: "",
            coords: {
                lat: 1,
                lng: 1
            }
        }

    ]
});

export default Report;
