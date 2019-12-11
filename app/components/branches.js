import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

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
      this.onDeleteBranch(id)
    }
  }
});
