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
    updateProfile(user) {

      return user.save()
        .then(() => {
          this.get('notifications').success('Profile updated', 'Success');
        })
    }
  }
});
