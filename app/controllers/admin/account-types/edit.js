import Controller from './base';
import { inject as service } from '@ember/service';

export default Controller.extend({
  toast: service(),

  actions: {
    updateAccountType(accountType) {
      return accountType.save()
        .then(() => {
          this.transitionToRoute('admin.account-types')
          this.get('toast').success('Account type updated');
        })
        .catch((err) => {
          err.errors.forEach((err) => {
            this.get('toast').error(err.detail);
          })
          accountType.rollbackAttributes();
        })
    }
  }
});
