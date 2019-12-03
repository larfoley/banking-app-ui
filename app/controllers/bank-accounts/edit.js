import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  toast: service('toast'),

  branchOptions: computed(function() {
    return this.get('model.branches');
  }),

  accountTypeOptions: computed(function() {
    return this.get('model.accountTypes');
  }),

  actions: {
    updateBankAccount(bankAccount) {
      const toast = this.get('toast');

      return bankAccount.save()
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
