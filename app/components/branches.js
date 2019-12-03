import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  toast: service(),

  columnsForRowsWithComponents: computed(function() {
    return [
      { name: 'Account Type', valuePath: 'name' },
      { name: 'Actions', valuePath: 'id' },
    ];
  }),

  rowsWithComponents: computed('branches.[]', function() {
    return this.get('branches').toArray();
  }),

  actions: {
    deleteBranch(id) {
      const toast = this.get('toast');

      this.onDeleteBranch(id)
        .then(() => {
          toast.success('Branch deleted')
        })
        .catch(() => {
          toast.error('Unable to delete branch')
        })
    }
  }
});
