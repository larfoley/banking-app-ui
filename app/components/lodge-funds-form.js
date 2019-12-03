import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  amount: null,
  cardHolderName: "",
  expirty: "",
  classNames: ['lodge-funds-form'],

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

    this.onLodgeFunds(transaction)

    e.target.reset();
  },

  actions: {
    setDate(date) {
      this.set('expiry', new Date(date).toLocaleDateString());
    }
  }
});
