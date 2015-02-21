import DS from 'ember-data';

var Report = DS.Model.extend({
    reporter: DS.attr(), // String
    dateReported: DS.attr(),
    images: DS.attr(), // String url []
    tags: DS.attr(), // String some constant
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
            tag: "",
            description: "",
            lat: 1,
            lng: 1
        },
        {
            id: 2,
            reporter: "Spiderman",
            images: [],
            tag: "",
            description: "",
            lat: 30,
            lng: 40
        },
        {
            id: 3,
            reporter: "Troy Harder",
            images: [],
            tag: "",
            description: "",
            lat: 8,
            lng: -41
        }

    ]
});

export default Report;
