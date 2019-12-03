import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteBranch(id) {
      const branch = this.store.peekRecord('branch', id)
      branch.deleteRecord()
      return branch.save()
    }
  }
});
