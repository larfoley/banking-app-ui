import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  toast: service(),

  submit(e) {
    e.preventDefault();

    const user = this.get('user');

    this.onSignUp(user)
      .catch((error) => {
        const toast = this.get('toast');

        if (!user.get('isValid')) {
          toast.info('Please fix validation errors');

        } else if (error.errors) {
          error.errors.forEach((err) => {
            toast.error(err.detail);
          })
          
        } else {
          toast.error('Unable to sing up');
        }
      })
  }
});
