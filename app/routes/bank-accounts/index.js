import ProtectedRoute from '../protected-route';

export default ProtectedRoute.extend({
  model() {
    return this.store.findAll('bank-account')
  }
});
