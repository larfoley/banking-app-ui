import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ["bank-account-overview"],

  hasManyBankAccounts: computed('bankAccounts.[]', function() {
    return this.get('bankAccounts.length') > 1;
  }),

  actions: {
    closeDropDown(dropdown) {
      dropdown.actions.close();
    }
  }
});
