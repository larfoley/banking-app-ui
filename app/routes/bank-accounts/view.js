import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model({ id }) {
    return hash({
      bankAccount: this.store.findRecord('bank-account', id),
      bankAccounts: this.store.findAll('bank-account'),
      transactions: this.store.query('transaction', { accountId: id})
    })
  }
});
