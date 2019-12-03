import Component from '@ember/component';

export default Component.extend({
  classNames: ['withdraw-funds-form'],
  amount: 0,
  tagName: 'form',
  cardHolderName: "",
  expiry: "",
  min: 0,

  submit(e) {
    e.preventDefault();

    const amount = this.get('amount').split('.');
    let total = parseInt(amount[0] * 100);
    if (amount.length > 1) {
      total += parseInt(amount[1]);
    }

    const transaction = {
      amount: total,
      accountId: this.get('accountId'),
      expiry: this.get('expiry'),
      cardHolderName: this.get('cardHolderName'),
      cardNumer: this.get('cardNumer'),
      csv: this.get('cvv'),
    }

    this.onWithdrawFunds(transaction)
    this.set('amount', 0);
  },

  actions: {
    setDate(date) {
      this.set('expiry', new Date(date).toLocaleDateString());
    }
  }
});
