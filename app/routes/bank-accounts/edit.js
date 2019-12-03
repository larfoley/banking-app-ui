import ProtectedRoute from '../protected-route';
import { hash } from 'rsvp';

export default ProtectedRoute.extend({
  model({ id }) {
    return hash({
      bankAccount: this.store.findRecord('bank-account', id),
      accountTypes: this.store.findAll('account-type'),
      branches: this.store.findAll('branch')
    })
  }
});
