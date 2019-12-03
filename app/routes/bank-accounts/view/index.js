import ProtectedRoute from '../../protected-route';

export default ProtectedRoute.extend({
  redirect(model) {
    this.transitionTo('bank-accounts.view.transactions', model.bankAccount.id)
  }
});
