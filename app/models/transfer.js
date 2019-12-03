import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  fromAccountId: attr('number'),
  toAccountIBan: attr('number'),
  amount: attr('number')
});
