import Route from '@ember/routing/route';

export default Route.extend({
  redirect(model) {
    this.transitionTo('bank-accounts.view.transactions', model.bankAccount.id)
  }
});
