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
              name: "The Dude",
              email: "dude@eds.com",
              phone: "412-555-2736",
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
              name: "Peter Parker",
              email: "spiderman@eds.com",
              phone: "412-555-7363",
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
              name: "Troy Harder",
              email: "troy@eds.com",
              phone: "412-555-4343",
              zip: 18018
            }
        },
        {
            id: 4,
            dateReported: 12345,
            images: ["http://www.snco.us/sw/image/content/full/illegal_dump_003.jpg"],
            tag: "Dumping",
            description: "This is a mess",
            lat: 40.375023,
            lng: -80.005642,

            user: {
              name: "Hope Frazier",
              email: "hope@gmail.com",
              phone: "412-524-2836",
              zip: 18018
            }

        },
        {
            id: 5,
            dateReported: 12345,
            images: ["https://sites.temple.edu/trash/files/2015/01/IMG_1701.jpg"],

            tag: "Clogged Inlet",
            description: "This inlet needs to be cleared",
            lat: 40.397664,
            lng: -80.098733,

            user: {
              name: "Missy Sullivan",
              email: "misty@cmu.edu",
              phone: "412-555-7363",
              zip: 18018
            }
        }

    ]
});

export default Report;
