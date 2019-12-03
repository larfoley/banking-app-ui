import UnprotectedRoute from './unprotected-route';

export default UnprotectedRoute.extend({
  model() {
    return this.store.createRecord('user');
  }
});
