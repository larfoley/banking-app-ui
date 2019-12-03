import AdminProtectedRoute from '../../admin-protected-route';

export default AdminProtectedRoute.extend({
  model({ id }) {
    return this.store.findRecord('branch', id);
  }
});
