import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  columns: computed('transactions.[]', function() {
    return [
      {
        name: `Date`,
        valuePath: `date`
      },
      {
        name: `Description`,
        valuePath: `description`
      },
      {
        name: `Money In`,
        valuePath: `credit`
      },
      {
        name: `Money Out`,
        valuePath: `debit`
      },
      {
        name: `Balance`,
        valuePath: `displayPostBalance`
      }
    ];
  }),

  rows: computed('transactions.[]', function() {
    return this.get('transactions').toArray();
  })
});
