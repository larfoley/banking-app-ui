import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({
  toast: service(),
  router: service(),
  tagName: 'form',

  submit(e) {
    e.preventDefault()

    const branch = get(this, 'branch')

      branch.save()
        .then(() => {
          this.get('toast').success('Branch saved');
          get(this, 'router').transitionTo('admin.branches')
        })
        .catch((err) => {
          err.errors.forEach((err) => {
            this.get('toast').error(err.detail);
          })
          branch.rollbackAttributes();
        })
  },

  succesHandler() {
    get(this, 'toast').success("Branch Saved");
    get(this, 'router').transitionTo('admin.branches')
  },

  errorHandler() {
    get(this, 'toast').error("Unable to save branch");
  }
});
