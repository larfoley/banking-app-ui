import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  branchOptions: computed(function() {
    return this.get('model.branches').mapBy('name');
  }),
  
  accountTypeOptions: computed(function() {
    return this.get('model.accountTypes').mapBy('name');
  }),
  
  actions: {
    createBankAccount(account) {
      const bankAccount = this.store.createRecord('bank-account', account);
      
      bankAccount.save()
        .then(() => {
          alert("success")
          this.transitionToRoute('bank-accounts');
        })
        .catch(() => {
          alert("error")
        })
    }
  }
});
