import Controller from './base';

export default Controller.extend({
  actions: {
    createNewAccountType(name) {
      return this.store.createRecord('accountType', { name })
        .save()
        .then(() => {
          this.transitionToRoute('admin.account-types')
        })
    }
  }
});
