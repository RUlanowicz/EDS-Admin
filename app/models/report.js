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
            tag: "dirty water",
            description: "the water is dirty and gross",
            lat: 1,
            lng: 1
        },
        {
            id: 2,
            dateReported: 12345,
            reporter: "Spiderman",
            images: [],
            tag: "fallen tree",
            description: "a tree fell over into the stream",
            lat: 30,
            lng: 40
        },
        {
            id: 3,
            dateReported: 12345,
            reporter: "Troy Harder",
            images: [],
            tag: "other",
            description: "there was an event",
            lat: 8,
            lng: -41
        }

    ]
});

export default Report;
