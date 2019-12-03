import Controller from './base';

export default Controller.extend({
  actions: {
    updateAccountType(accountType) {
      return accountType.save().then(() => {
        this.transitionToRoute('admin.account-types')
      })
    }
  }
});
