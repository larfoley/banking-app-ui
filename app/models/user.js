import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model, attr } = DS;

export default Model.extend({
  fullName: attr('string'),
  email: attr('string'),
  password: attr('string'),
  address: attr('string'),
  role: attr('string'),
  isAdmin: computed('role', function() {
    return this.get('role') === 'admin';
  }),
});
