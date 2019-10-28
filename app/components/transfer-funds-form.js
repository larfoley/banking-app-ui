import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'form',
  transferAmount: 0,
  min: 0,
  
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
    alert('tansfering funds...')
  }
});
