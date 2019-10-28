import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: "form",

  selectedBranch: computed(function() {
    return this.get('branchOptions.firstObject');
  }),

  selectedAccountType: computed(function() {
    return this.get('accountTypeOptions.firstObject');
  }),

  submit(e) {
    e.preventDefault();

    const branch = this.get('selectedBranch');
    const accountType = this.get('selectedAccountType');

    this.onCreateBankAccount({
      branch,
      accountType
    });
  }
});
