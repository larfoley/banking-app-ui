import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['transfer-funds-form'],
  tagName: 'form',
  transferAmount: 0,
  min: 1,
  fundsHaveBeenTransfered: false,
  toAccountIBan: "",

  accountOptions: computed('property', function() {
    return this.get('bankAccounts').filter((account) => {
      return account.get('name') != this.get('account.name');
    });
  }),

  selectedAccount: computed(function() {
    if (this.get('accountOptions.length')) {
      return this.get('accountOptions.firstObject');
    }
    return "";
  }),

  max: computed('property', function() {
    return this.get('accountBalance');
  }),

  postBalance: computed('transferAmount', function() {
    return this.get('accountBalance') - this.get('transferAmount');
  }),

  submit(e) {
    e.preventDefault();
    const fromAccountId = this.get('fromAccountId');
    const toAccountIBan = this.get('toAccountIBan');
    const amount = this.get('transferAmount').split('.');
    let total = parseInt(amount[0] * 100);
    
    if (amount.length > 1) {
      total += parseInt(amount[1]);
    }

    this.onTransferFunds({
      fromAccountId,
      toAccountIBan,
      amount: total
    }).then(() => {
      this.set('transferAmount', 0);
    })
  }
});
