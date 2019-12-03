import AdminProtectedRoute from '../../admin-protected-route';

export default AdminProtectedRoute.extend({
  model() {
    return this.store.createRecord('branch');
  },

  actions: {
    willTransition() {
      this.store.peekAll('branch').forEach((branch) => {
        if (branch.get('isNew')) {
          branch.rollbackAttributes()
        }
      });
    }
  }
});
