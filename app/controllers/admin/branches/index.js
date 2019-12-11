import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  toast: service(),
  
  actions: {
    deleteBranch(id) {
      const branch = this.store.peekRecord('branch', id)
      return branch.save()
        .then(() => {
          this.get('toast').success('Branch deleted');
        })
        .catch((err) => {
          err.errors.forEach((err) => {
            this.get('toast').error(err.detail);
          })
          branch.rollbackAttributes();
        })
    }
  }
});
