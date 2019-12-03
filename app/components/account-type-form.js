import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  toast: service(),
  tagName: 'form',
  name: '',

  submit(e) {
    e.preventDefault()
    const toast = this.get('toast');

    if (this.isUpdating) {
      this.onUpdateAccountType(this.get('accountType'))
        .then(() => {
          toast.success('Account type updated');
        })
        .catch(() => {
          toast.error('Unable to update account type');
        })
    } else {
      this.onCreateAccountType(this.get('name'))
        .then(() => {
          toast.success('Account type created');
        })
        .catch(() => {
          toast.error('Unable to create account type');
        })
    }
  }
});
