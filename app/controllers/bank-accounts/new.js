import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  toast: service(),

  branchOptions: computed(function() {
    return this.get('model.branches');
  }),

  accountTypeOptions: computed(function() {
    return this.get('model.accountTypes');
  }),

  actions: {
    createBankAccount(branch, accountType) {
      const toast = this.get('toast');
      const bankAccount = this.store.createRecord('bank-account', {
        branch,
        accountType
      });

      return bankAccount.save({
        adapterOptions: { includeId: true }
      })
        .then(() => {
          toast.success("Bank account created");
          this.transitionToRoute('bank-accounts');
        })
        .catch(() => {
          toast.error('Unable to create bank account.')
        })
    }
  }
});
