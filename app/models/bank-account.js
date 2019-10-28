import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  accountType: attr('string'),
  balance: attr('number', {
    defaultValue: 0
  }),
  iban: attr('string'),
  bic: attr('string'),
  name: attr('string')
});
