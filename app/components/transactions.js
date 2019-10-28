import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  columns: computed(function() {
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
        valuePath: `postBalance`
      }
    ];
  }),

  rows: computed(function() {
    return this.get('transactions').toArray();
  })
});
