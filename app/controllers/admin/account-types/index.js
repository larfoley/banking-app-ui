import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteAccountTypes(id) {
      const accountType = this.store.peekRecord('account-type', id);

      accountType.deleteRecord();
      return accountType.save();
    }
  }
});
