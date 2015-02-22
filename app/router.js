import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('reports', { path: '/reports' }, function() {
      this.resource('reports.report', { path: ':report_id' });
  });
  this.route('map');
});

export default Router;
