import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({
  toast: service(),
  router: service(),
  tagName: 'form',

  submit(e) {
    e.preventDefault()

    get(this, 'branch').save()
      .then(() => this.succesHandler())
      .catch((err) => this.errorHandler(err))
  },

  succesHandler() {
    get(this, 'toast').success("Branch Saved");
    get(this, 'router').transitionTo('admin.branches')
  },

  errorHandler() {
    get(this, 'toast').error("Unable to save branch");
  }
});
