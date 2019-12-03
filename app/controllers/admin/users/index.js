import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteUser(id) {
      const branch = this.store.peekRecord('user', id)
      branch.deleteRecord()
      return branch.save()
    }
  }
});
