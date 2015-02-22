import DS from 'ember-data';

var Report = DS.Model.extend({
    dateReported: DS.attr(),
    images: DS.attr(), // String url []
    tag: DS.attr(), // String some constant
    description: DS.attr(), // String
    // coords: DS.attr() // { lat: x, lng: y }
    lat: DS.attr(),
    lng: DS.attr(),
    user: DS.attr(),
    sinceReported: function() {
        return moment("20120620", "YYYYMMDD").fromNow();
    }.property('dateReported')
});

Report.reopenClass({
    FIXTURES: [
        {
            id: 1,
            dateReported: 12345,
            images: [],
            tag: "Dumping",
            description: "Look at where these jerks are dumping",
            lat: 40.375023,
            lng: -80.005642,

            user: {
              firstName: "The",
              lastName: "Dude",
              email: "dude@eds.com",
              phone: 736,
              zip: 18018
            }

        },
        {
            id: 2,
            dateReported: 12345,
            images: [],

            tag: "Clogged Inlet",
            description: "This inlet is clogged",
            lat: 40.397664,
            lng: -79.998733,

            user: {
              firstName: "Peter",
              lastName: "Parker",
              email: "spiderman@eds.com",
              phone: 736,
              zip: 18018
            }
        },
        {
            id: 3,
            dateReported: 12345,

            images: [
                "http://images.nationalgeographic.com/wpf/media-live/photos/000/008/cache/arizona-rock_824_600x450.jpg",
                "http://images.nationalgeographic.com/wpf/media-live/photos/000/008/cache/arizona-rock_824_600x450.jpg",
                "http://images.nationalgeographic.com/wpf/media-live/photos/000/008/cache/arizona-rock_824_600x450.jpg"],
            tag: "Erosion",
            description: "There's so much erosion",
            lat: 40.368415,
            lng: -80.031102,

            user: {
              firstName: "Troy",
              lastName: "Harder",
              email: "troy@eds.com",
              phone: 736,
              zip: 18018
            }
        }

    ]
});

export default Report;
