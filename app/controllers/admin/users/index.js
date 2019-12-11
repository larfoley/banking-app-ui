import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  toast: service(),
  actions: {
    deleteUser(id) {
      const branch = this.store.peekRecord('user', id)
      const toast = this.get('toast')

      branch.deleteRecord()

      return branch.save()
        .then(() => {
          toast.success('User deleted');
        })
        .catch((err) => {
          err.errors.forEach((err) => {
            toast.error(err.detail);
          })
          branch.rollbackAttributes();
        })
    }
  }
});
