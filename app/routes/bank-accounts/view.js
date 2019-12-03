import ProtectedRoute from '../protected-route';
import { hash } from 'rsvp';

export default ProtectedRoute.extend({
  model({ id }) {
    return hash({
      bankAccount: this.store.findRecord('bank-account', id),
      bankAccounts: this.store.findAll('bank-account'),
      transactions: this.store.query('transaction', { accountId: id })
    })
  }
});
