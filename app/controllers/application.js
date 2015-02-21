import Ember from 'ember';
import {MAP_TYPES} from '../components/google-map';

export default Ember.Controller.extend({
  lat:      40.447243,
  lng:      -79.969010,
  zoom:     10,
  type:     'road',
  mapTypes: MAP_TYPES

});
