import AdminProtectedRoute from '../admin-protected-route';

export default AdminProtectedRoute.extend({
  redirect() {
    this.transitionTo('admin.users')
  }
});
