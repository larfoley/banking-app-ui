import Controller from '@ember/controller';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default Controller.extend({
  toast: service('toast'),

  init() {
    this._super(...arguments);
    this.set('errors', A())
  },

  actions: {
    updateProfile(user) {
      const toast = this.get('toast');

      return user.save()
        .then(() => {
          this.get('toast').success('Profile updated', 'Success');
        })
        .catch((err) => {
          err.errors.forEach((err) => {
            toast.error(err.detail);
          })
          user.rollbackAttributes();
        })
    }
  }
});
