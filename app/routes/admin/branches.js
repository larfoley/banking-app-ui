import AdminProtectedRoute from '../admin-protected-route';

export default AdminProtectedRoute.extend({
  model() {
    return this.store.findAll('branch')
  }
});
