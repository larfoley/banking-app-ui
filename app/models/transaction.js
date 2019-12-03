import DS from 'ember-data';
const { Model, attr } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  amount: attr('number'),
  postBalance: attr('number'),
  date: attr('string'),
  description: attr('string'),
  credit: computed('amount', function() {
    if (this.get('amount') > 0) {
      return this.get('amount') / 100
    }
    return 0;
  }),
  debit: computed('amount', function() {
    if (this.get('amount') < 0) {
      return this.get('amount') / 100
    }
    return 0;
  }),
  displayPostBalance: computed('postBalance', function() {
    return this.get('postBalance') / 100;
  }),
});
