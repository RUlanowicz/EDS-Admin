import DS from 'ember-data';


/****
    Toggle useDummyData between true and false depending on whether
    you would like the Ember app to run using a FixtureAdapter with
    dummy data or the RESTAdapter to make calls to a backend server.
*/
var useDummyData = true;

var ApplicationAdapter;

if(useDummyData) {
    console.log("Using the FixtureAdapter");

    ApplicationAdapter = DS.FixtureAdapter.extend({
        queryFixtures: function(records, query, type) {
            console.log(query);
            console.log(type);
        var result = records.filter(function(record) {
            for(var key in query) {
                if (!query.hasOwnProperty(key)) { continue; }
                var value = query[key];
                if (record[key] !== value) { return false; }
            }
            return true;
        });

        console.log('result: ' + result);
        return result;
      }

    });
} else {
    console.log("Using the RESTAdapter");

    ApplicationAdapter = DS.RESTAdapter.extend({
        host: 'http://localhost:8080'
    });
}

export default ApplicationAdapter;
