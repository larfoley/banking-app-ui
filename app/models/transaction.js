import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  amount: attr('string'),
  postBalance: attr('number'),
  date: attr('string'),
  description: attr('string'),
  credit: attr('string'),
  debit: attr('string'),
  currency: attr('string', {
    defaultValue: "$"
  }),
});
