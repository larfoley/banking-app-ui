import DS from 'ember-data';
const { Model, attr } = DS;
import { computed } from '@ember/object';
import { capitalize } from '@ember/string';

export default Model.extend({
  accountNumber: attr('number'),
  balance: attr('number', {
    defaultValue: 0
  }),
  accountType: attr(),
  branch: attr(),
  iban: attr('string'),
  bic: attr('string'),
  sortCode: attr('number'),
  name: computed('accountType.name', function() {
    return capitalize(`${this.get('accountType.name')} ${this.get('accountNumber')}`)
  }),
  dividedBalance: computed('balance', function() {
    return this.get('balance') / 100;
  }),
  displayBalance: computed('dividedBalance', function() {
    return "€" + this.get('dividedBalance').toFixed(2);
  }),
});
