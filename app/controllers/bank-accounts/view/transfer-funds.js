import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from '../../../config/environment';

const { host, namespace } = ENV.APP;

export default Controller.extend({
  ajax: service(),
  session: service(),
  toast: service(),

  actions: {
    transferFunds(transfer) {
      const toast = this.get('toast');
      const { fromAccountId, amount } = transfer;
      const fromAccount = this.store.peekRecord('bank-account', fromAccountId);

      return this.get('ajax')
        .request(`${host}/${namespace}/transactions/transfer`, {
          method: 'POST',
          data: {
            transfer
          },
          headers: {
            Authorization: `Bearer ${this.get('session.data.authenticated.access_token')}`
          },
          contentType: 'application/json; charset=UTF-8'
        })
        .then(() => {
          const fromAccountBalance = fromAccount.get('balance');
          
          fromAccount.set('balance', fromAccountBalance - amount);
          toast.success('Funds have been transfered');
          this.get('model.transactions').update();
        })
        .catch((err) => {
          toast.error(err.payload.error);
        });
    }
  }
});
