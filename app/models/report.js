import DS from 'ember-data';

var Report = DS.Model.extend({
    reporter: DS.attr(), // String
    dateReported: DS.attr(),
    images: DS.attr(), // String url []
    tag: DS.attr(), // String some constant
    description: DS.attr(), // String
    // coords: DS.attr() // { lat: x, lng: y }
    lat: DS.attr(),
    lng: DS.attr(),
    sinceReported: function() {
        return moment("20120620", "YYYYMMDD").fromNow();
    }.property('dateReported')
});

Report.reopenClass({
    FIXTURES: [
        {
            id: 1,
            dateReported: 12345,
            reporter: "The Dude",
            images: [],
            tag: "Dumping",
            description: "Look at where these jerks are dumping",
            lat: 40.375023,
            lng: -80.005642
        },
        {
            id: 2,
            dateReported: 12345,
            reporter: "Spiderman",
            images: [],
            tag: "Clogged Inlet",
            description: "This inlet is clogged",
            lat: 40.397664,
            lng: -79.998733
        },
        {
            id: 3,
            dateReported: 12345,
            reporter: "Troy Harder",
            images: [],
            tag: "Erosion",
            description: "There's so much erosion",
            lat: 40.368415,
            lng: -80.031102
        }

    ]
});

export default Report;
