import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),

  bankAccountName: computed('model.bankAccount.accountType.name', function() {
    return this.get('model.bankAccount.accountType.name');
  }),

  bankAccountBalance: computed('model.bankAccount.balance', function() {
    return this.get('model.bankAccount.displayBalance');
  }),

  balance: computed('model.bankAccount.displayBalance', function() {
    return this.get('model.bankAccount.displayBalance');
  }),

  transactions: computed('model.transactions.[]', function() {
    return this.get('model.transactions');
  }),

  bankAccounts: computed('model.bankAccounts.[]', function() {
    return this.get('model.bankAccounts');
  }),

  bankAccountId: computed('model.bankAccount.id', function() {
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
