import Controller from '@ember/controller';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notifications: service('toast'),

  init() {
    this._super(...arguments);
    this.set('errors', A())
  },

  actions: {
    createAccount(user) {

      return user.save()
        .then(() => {
          this.get('notifications').success('Account registered', 'Succes');
          this.transitionToRoute('sign-in');
        })
    }
  }
});
