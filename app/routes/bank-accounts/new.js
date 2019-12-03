import ProtectedRoute from '../protected-route';
import { hash } from 'rsvp';

export default ProtectedRoute.extend({
  model() {
    return hash({
      accountTypes: this.store.findAll('accountType'),
      branches: this.store.findAll('branch'),
    })
  }
});
