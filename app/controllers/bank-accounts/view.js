import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  bankAccountName: computed(function() {
    return this.get('model.bankAccount.name');
  }),

  iban: computed(function() {
    return this.get('model.bankAccount.iban');
  }),

  bic: computed(function() {
    return this.get('model.bankAccount.iban');
  }),

  balance: computed(function() {
    return this.get('model.bankAccount.balance');
  }),

  transactions: computed(function() {
    return this.get('model.transactions');
  }),

  bankAccounts: computed(function() {
    return this.get('model.bankAccounts');
  }),

  bankAccountId: computed(function() {
    return this.get('model.bankAccount.id');
  }),

  actions: {
    deleteBankAccount() {
      const bankAccount = this.get('model.bankAccount');

      bankAccount.deleteRecord();
      bankAccount.save()
        .then(() => {
          alert('deleted');
          this.transitionToRoute('bank-accounts');
        })
        .catch(() => {
          alert('error')
        })
    }
  }
});
