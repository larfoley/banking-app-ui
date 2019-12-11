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
    } else {
      this.onCreateAccountType(this.get('name'))
    }
  }
});
