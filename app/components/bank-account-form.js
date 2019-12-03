import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: "form",

  selectedBranch: computed(function() {
    if (this.get('isUpdating')) {
      return this.get('bankAccount.branch');
    }
    return this.get('branchOptions.firstObject');
  }),

  selectedAccountType: computed(function() {
    if (this.get('isUpdating')) {
      return this.get('bankAccount.accountType')
    }
    return this.get('accountTypeOptions.firstObject');
  }),

  accountType: computed('selectedAccountType', function() {
    return this.get('selectedAccountType').toJSON({ includeId: true });
  }),

  branch: computed('selectedBranch', function() {
    return this.get('selectedBranch').toJSON({ includeId: true });
  }),

  isUpdating: computed(function() {
    return !!this.get('bankAccount');
  }),

  submit(e) {
    e.preventDefault();
    const bankAccount = this.get('bankAccount');
    const branch = this.get('selectedBranch');
    const accountType = this.get('selectedAccountType');

    if (bankAccount) {
      bankAccount.set('accountType', this.get('selectedAccountType'));
      bankAccount.set('branch', this.get('selectedBranch'));

      this.onUpdateBankAccount(bankAccount);
    } else {
      
      this.onCreateBankAccount(branch, {
        id: accountType.get('id'),
        name: accountType.get('name')
      });
    }
  }
});
