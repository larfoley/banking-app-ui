import Controller from '@ember/controller';
import ENV from '../../../config/environment';
import { inject as service } from '@ember/service';

const { host, namespace } = ENV.APP;

export default Controller.extend({
  ajax: service(),
  session: service(),
  toast: service(),

  actions: {
    lodgeFunds(transaction) {
      const toast = this.get('toast');

      this.get('ajax')
        .request(`${host}/${namespace}/transactions/lodgement`, {
          method: 'POST',
          data: {
            transaction
          },
          headers: {
            Authorization: `Bearer ${this.get('session.data.authenticated.access_token')}`
          },
          contentType: 'application/json; charset=UTF-8'
        })
        .then(() => {
          toast.success('Lodgment was successfull');
          const bankAccount = this.store.peekAll('bank-account').find((ba) => {
            return ba.get('id') == transaction.accountId;
          });
          const balance = bankAccount.get('balance');
          bankAccount.set('balance', balance + transaction.amount);
          this.get('model.transactions').update();
        })
        .catch((err) => {
          toast.error(err.payload.error);
        });
    }
  }
});
